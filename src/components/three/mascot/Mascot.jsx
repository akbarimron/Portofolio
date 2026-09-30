import { useMemo, useRef } from 'react'
import { useFrame, useLoader, useThree } from '@react-three/fiber'
import { MathUtils as M, NoColorSpace, DoubleSide, ShaderMaterial, SRGBColorSpace, TextureLoader, Vector2 } from 'three'
import Shapes from './Shapes'
import { vertex, fragment } from './shader'
import { createBlinker, drift, pointPulse } from './rhythm'
import { ASPECT, ZOOM, clamp } from './journey'

// The Pixar portrait as a living 3D puppet. Layers of motion, all smooth:
//  primary   breathing, head roll, the pointing arm swinging at the elbow
//  secondary eyes lead the head toward the cursor, then the head follows
//  ambient   slow sway, drifting attention, blinks (sometimes double)
// `getPose()` gives the scroll-driven placement in screen px every frame.
export default function Mascot({ getPose }) {
  const { width: vw, height: vh } = useThree((s) => s.size)
  const [map, depth] = useLoader(TextureLoader, ['/mascot/akbar.webp', '/mascot/akbar-depth.png'])
  const group = useRef()
  const mesh = useRef()
  const shapes = useRef({ x: 0, y: 0, show: 0, k: 1 })
  const s = useRef({
    x: null, r: 0, prevR: 0, vx: 0,
    eye: new Vector2(), head: new Vector2(), yaw: 0, pitch: 0,
    blink: createBlinker(),
  })

  const material = useMemo(() => {
    map.colorSpace = SRGBColorSpace
    map.anisotropy = 8
    depth.colorSpace = NoColorSpace
    return new ShaderMaterial({
      vertexShader: vertex,
      fragmentShader: fragment,
      transparent: true,
      depthWrite: false,
      side: DoubleSide,
      uniforms: {
        uMap: { value: map }, uDepth: { value: depth }, uDepthAmt: { value: 0.16 },
        uBreath: { value: 0 }, uSway: { value: 0 }, uRoll: { value: 0 }, uShift: { value: 0 }, uForearm: { value: 0 },
        uBlink: { value: 0 }, uLook: { value: new Vector2() }, uClipY: { value: -1e4 }, uOpacity: { value: 1 },
      },
    })
  }, [map, depth])

  useFrame((state, delta) => {
    const dt = Math.min(delta, 0.05)
    const t = state.clock.elapsedTime
    const me = s.current
    const u = material.uniforms
    const pose = getPose()

    const target = pose.r
    me.prevR = me.r
    const prevX = me.x
    me.r = M.damp(me.r, target, 9, dt)
    // hidden -> reposition for free; visible -> glide
    me.x = me.x == null || me.r < 0.03 ? pose.x : M.damp(me.x, pose.x, 10, dt)
    // horizontal speed (px/s), smoothed: drives the lean and where the eyes look
    me.vx = M.damp(me.vx, prevX == null ? 0 : (me.x - prevX) / dt, 12, dt)

    const H = pose.H
    const clipWorld = (vh / 2 - pose.clipY) / ZOOM
    const hidden = (1 - me.r) * (H + 14)
    group.current.position.set((me.x - vw / 2) / ZOOM, clipWorld - hidden / ZOOM, 0)
    u.uClipY.value = clipWorld
    const sh = shapes.current
    sh.x = group.current.position.x
    sh.y = clipWorld
    sh.k = H / 320
    sh.show = M.damp(sh.show, pose.plat ?? 0, 9, dt)

    // stretch while rising, settle with a small breathing squash; anchored at the bottom
    const rise = clamp((me.r - me.prevR) / dt, -2, 2)
    const sy = 1 + rise * 0.02 + Math.sin(t * 3.1) * (pose.mode === 'about' ? 0.012 : 0)
    const sx = 1 / Math.sqrt(sy)
    mesh.current.scale.set((H * ASPECT * sx) / ZOOM, (H * sy) / ZOOM, H / ZOOM)
    mesh.current.position.y = (H * sy) / ZOOM / 2

    // attention: it wanders on its own (never follows the cursor). Eyes arrive first, head later.
    const sliding = Math.abs(me.vx) > 80
    const tx = sliding ? clamp(me.vx / 1200, -1, 1) : drift(t, 0.33) * 0.55
    const ty = sliding ? 0.1 : drift(t, 0.37) * 0.25
    me.eye.set(M.damp(me.eye.x, tx, 14, dt), M.damp(me.eye.y, ty, 14, dt))
    me.head.set(M.damp(me.head.x, tx, 4.2, dt), M.damp(me.head.y, ty, 4.2, dt))
    u.uLook.value.copy(me.eye)

    me.yaw = M.damp(me.yaw, me.head.x * 0.22 + drift(t, 0.5) * 0.03, 3.5, dt)
    me.pitch = M.damp(me.pitch, -me.head.y * 0.08, 3.5, dt)
    group.current.rotation.set(me.pitch, me.yaw, 0)

    const cheer = pose.mode === 'about' ? 1 : 0
    u.uBreath.value = Math.sin(t * 1.55)
    u.uRoll.value = -me.head.x * 0.035 + drift(t, 0.8) * 0.012
    u.uShift.value = me.head.x * 0.006
    u.uForearm.value = drift(t, 1.9) * 0.012 + pointPulse(t) + cheer * Math.sin(t * 4.6) * 0.04
    u.uSway.value = drift(t, 0.9) * 0.0045 + pose.lean * 0.05 + clamp(me.vx / 2400, -1, 1) * 0.035
    u.uBlink.value = me.blink(t)
  })

  return (
    <>
      <group ref={group}>
        <mesh ref={mesh} material={material} frustumCulled={false} renderOrder={10}>
          <planeGeometry args={[1, 1, 64, 76]} />
        </mesh>
      </group>
      <Shapes state={shapes} />
    </>
  )
}
