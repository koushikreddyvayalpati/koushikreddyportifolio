import React, { useRef } from 'react'
import { Float, useGLTF } from '@react-three/drei'

export function Pythonlogo(props) {
  const { nodes, materials } = useGLTF('/python/python.glb')
  return (
    <Float floatIntensity={1}>
      <group position={[12, 12, 0]} scale={0.1} {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Python_Python_0.geometry}
          material={materials.Python}
          position={[0, 0.079, 0.181]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.392, 0.392, 0.527]}
        />
      </group>
    </Float>
  )
}

useGLTF.preload('/python/python.glb')
export default Pythonlogo;
