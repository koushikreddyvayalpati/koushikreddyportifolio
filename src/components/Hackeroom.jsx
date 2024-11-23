import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Hackeroom(props) {
  const { nodes, materials } = useGLTF('/hollow_knight.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.068}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials['null']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials['None.001']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/hollow_knight.glb')
export default Hackeroom;