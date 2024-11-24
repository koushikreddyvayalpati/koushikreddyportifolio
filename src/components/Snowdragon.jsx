import React, { useRef,useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Snowdragon({ currentAnimation, ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/snow_dragon.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    Object.values(actions).forEach((action) => action.stop());

    if (actions[currentAnimation]) {
      actions[currentAnimation].play();
    }
  }, [actions, currentAnimation]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.989}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Sketchfab_model_0" rotation={[-Math.PI / 2, 0, 0]} scale={20.612}>
                <group name="zq127_binglong_modefbx_1" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                  <group name="Object_2_2">
                    <group name="RootNode_3">
                      <group name="zq127_binglong_mode_4" scale={1.5}>
                        <group name="Object_5_5">
                          <group name="GLTF_created_0">
                            <primitive object={nodes.GLTF_created_0_rootJoint} />
                            <skinnedMesh
                              name="Object_102"
                              geometry={nodes.Object_102.geometry}
                              material={materials.zq127_binglong_1}
                              skeleton={nodes.Object_102.skeleton}
                            />
                            <group name="Object_8_8_correction">
                              <group name="Object_8_8" />
                            </group>
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/snow_dragon.glb')
export default Snowdragon;
