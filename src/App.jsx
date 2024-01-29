import { React, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Tetrahedron } from '@react-three/drei'
import { pointsAsteriod, pointsCircle, pointsOuter } from './utils/pointCalc'

function App() {
  return (
    <div className='relative'>
      <Canvas className='bg-[#101010]' style={{ height: '100vh' }} camera={{ position: [10, -7.5, -5], }}>
        <OrbitControls maxDistance={17} minDistance={10} />
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={25.0} />
        <TetrahedronElems />
      </Canvas>
      <h1 className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-slate-200 font-medium text-2xl md:text-5xl pointer-events-none">
        Placeholder
      </h1>
    </div>
  )
}

const TetrahedronElems = () => {
  const ref = useRef();

  useFrame(({ clock }) => {
    ref.current.rotation.z = clock.getElapsedTime() * 0.05;
  });

  return (
    <group ref={ref}>
      {pointsAsteriod.map(point => <Tetra key={point.idx} position={point.position} color={point.color} />)}
      {pointsCircle.map(point => <Tetra key={point.idx} position={point.position} color={point.color} />)}
      {pointsOuter.map(point => <Tetra key={point.idx} position={point.position} color={point.color} />)}
    </group>
  )
}

const Tetra = ({ position, color }) => {
  return (
    <Tetrahedron
      position={position}
      args={[0.1, 1, 1]}
    >
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
      />
    </Tetrahedron>
  )
}

export default App
