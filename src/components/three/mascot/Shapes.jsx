import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'

// Motion graphic "stage" under the mascot, drawn in the same canvas so it can
// pass in front of and behind the character:
//  two thin turning arcs around the head (no filled disc, so the photo behind stays visible), a dark platform ellipse at
//  the cut line (it hides the edge where the bust is clipped), an orbit ring with
//  three dots that circle the platform, and a few shapes that bob and spin.
// Units: 1 = 100px. `state` is written every frame by Mascot: {x, y, show, k}.
const C = { mist: '#d0e4fe', ink: '#091f5c', royal: '#334daf', sky: '#7096d1', ice: '#f9fbff' }
const BACK = 3
const MID = 10 // the mascot itself
const FRONT = 20

// renderOrder is set on the mesh, never on a group: a group's renderOrder outranks
// every mesh order inside it and would put the whole group after the mascot.
function Flat({ color, order, opacity = 1, meshRef, children, ...props }) {
  return (
    <mesh ref={meshRef} renderOrder={order} {...props}>
      {children}
      <meshBasicMaterial color={color} transparent opacity={opacity} depthTest={false} depthWrite={false} />
    </mesh>
  )
}

const DOTS = [
  { color: C.sky, r: 0.13, off: 0, speed: 0.9 },
  { color: C.ice, r: 0.09, off: 2.1, speed: 0.9 },
  { color: C.royal, r: 0.11, off: 4.2, speed: 0.9 },
]

export default function Shapes({ state }) {
  const root = useRef()
  const arcA = useRef()
  const arcB = useRef()
  const dots = useRef([])
  const ring = useRef()
  const diamond = useRef()
  const tri = useRef()
  const plus = useRef()
  const disc = useMemo(() => ({ ring: [0.14, 0.19, 32], arc: (r, len) => [r, r + 0.04, 72, 1, 0, len] }), [])

  useFrame((s) => {
    const st = state.current
    const g = root.current
    const t = s.clock.elapsedTime
    g.visible = st.show > 0.01
    if (!g.visible) return
    g.position.set(st.x, st.y, 0)
    g.scale.setScalar(st.k * st.show)

    arcA.current.rotation.z = t * 0.7
    arcB.current.rotation.z = -t * 0.45 + 1
    DOTS.forEach((d, i) => {
      const a = t * d.speed + d.off
      const m = dots.current[i]
      m.position.set(Math.cos(a) * 1.9, Math.sin(a) * 0.45, 0)
      m.renderOrder = Math.sin(a) < 0 ? FRONT + 1 : BACK // in front on the near side of the ring
    })
    ring.current.position.y = 3.0 + Math.sin(t * 1.4) * 0.09
    diamond.current.position.y = 3.35 + Math.sin(t * 1.1 + 1) * 0.1
    diamond.current.rotation.z = Math.PI / 4 + Math.sin(t * 0.9) * 0.5
    tri.current.rotation.z = t * 0.8
    tri.current.position.y = 1.5 + Math.sin(t * 1.7 + 2) * 0.08
    plus.current.rotation.z = -t * 0.6
    plus.current.position.y = 1.15 + Math.sin(t * 1.3 + 4) * 0.08
  })

  return (
    <group ref={root} visible={false}>
      {/* behind the mascot */}
      <group ref={arcA} position={[0.05, 2.05, 0]}>
        <Flat color={C.royal} order={BACK + 1}><ringGeometry args={disc.arc(1.37, Math.PI * 1.15)} /></Flat>
      </group>
      <group ref={arcB} position={[0.05, 2.05, 0]}>
        <Flat color={C.sky} order={BACK + 1}><ringGeometry args={disc.arc(1.5, Math.PI * 0.8)} /></Flat>
      </group>
      <Flat color={C.sky} order={BACK + 1} scale={[1.9, 0.45, 1]}>
        <ringGeometry args={[0.985, 1, 96, 1, 0, Math.PI]} />
      </Flat>

      <group ref={ring} position={[-1.5, 3, 0]}><Flat color={C.royal} order={BACK}><ringGeometry args={disc.ring} /></Flat></group>
      <group ref={diamond} position={[1.5, 3.25, 0]}><Flat color={C.ink} order={BACK}><planeGeometry args={[0.3, 0.3]} /></Flat></group>
      <group ref={tri} position={[-1.65, 1.5, 0]}><Flat color={C.sky} order={BACK}><circleGeometry args={[0.2, 3]} /></Flat></group>
      <group ref={plus} position={[1.6, 1.1, 0]}>
        <Flat color={C.royal} order={BACK}><planeGeometry args={[0.36, 0.08]} /></Flat>
        <Flat color={C.royal} order={BACK}><planeGeometry args={[0.08, 0.36]} /></Flat>
      </group>

      {DOTS.map((d, i) => (
        <Flat key={i} color={d.color} order={BACK} meshRef={(el) => (dots.current[i] = el)}>
          <circleGeometry args={[d.r, 24]} />
        </Flat>
      ))}

      {/* in front: the platform that hides the cut edge, and the near half of its rim */}
      <Flat color={C.ink} order={FRONT} scale={[1.6, 0.34, 1]}><circleGeometry args={[1, 72]} /></Flat>
      <Flat color={C.sky} order={FRONT} scale={[1.9, 0.45, 1]}>
        <ringGeometry args={[0.985, 1, 96, 1, Math.PI, Math.PI]} />
      </Flat>
    </group>
  )
}
