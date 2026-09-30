import { Canvas, useThree } from '@react-three/fiber'
import Mascot from './mascot/Mascot'
import { ZOOM, clamp, computePose } from './mascot/journey'

function Scene({ getFigure, scrollY }) {
  const size = useThree((s) => s.size)
  const getPose = () => {
    const { width: vw, height: vh } = size
    const desktop = vw >= 1024
    const H = desktop ? 320 : 260
    const pose = computePose({ vw, vh, desktop, fig: getFigure() })

    return {
      ...pose,
      H,
      lean: clamp(-scrollY.getVelocity() / 6000, -0.3, 0.3), // follow-through when the page moves
    }
  }

  return <Mascot getPose={getPose} />
}

// Default export so the whole three.js chunk loads lazily.
export default function MascotStage({ getFigure, scrollY, onReady }) {
  return (
    <Canvas
      flat
      orthographic
      dpr={[1, 2]}
      camera={{ zoom: ZOOM, position: [0, 0, 50] }}
      gl={{ antialias: true, alpha: true }}
      onCreated={onReady}
      // r3f sets pointer-events:auto on its wrapper; without this the full-screen
      // canvas would swallow every click meant for the page underneath
      style={{ pointerEvents: 'none' }}
    >
      <Scene getFigure={getFigure} scrollY={scrollY} />
    </Canvas>
  )
}
