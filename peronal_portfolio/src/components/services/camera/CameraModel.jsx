

import React from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function CameraModel(props) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF('/cameraModel.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="_53">
                <group name="Object019_52" position={[6.613, -1.902, -3.046]} rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="Object020_51" position={[-0.442, 0.023, 0.027]}>
                    <group name="Object010_49" position={[-4.2, 0.279, -0.102]} rotation={[0, 0, -Math.PI]} scale={1.035}>
                      <mesh name="Object_17" geometry={nodes.Object_17.geometry} material={materials.FCD__Glass_All_0} />
                    </group>
                    <group name="FCD__Screen_1_50" position={[-4.196, 0.266, 0.11]}>
                      <mesh name="Object_19" geometry={nodes.Object_19.geometry} material={materials.FCD__Screen_1} />
                    </group>
                    <mesh name="Object_15" geometry={nodes.Object_15.geometry} material={materials.key_1} />
                  </group>
                  <mesh name="Object_13" geometry={nodes.Object_13.geometry} material={materials.key_0} />
                </group>
                <group name="Object_11" rotation={[-Math.PI / 2, 0, 0]}>
                  <mesh name="Object_5" geometry={nodes.Object_5.geometry} material={materials.body} />
                </group>
                <group name="Object018_44" position={[0.217, 0.119, -0.73]} rotation={[-Math.PI / 2, 0, 0]}>
                  <mesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials.material} />
                </group>
                <group name="Plane001_46" position={[1.876, 3.262, -4.306]} rotation={[Math.PI, 0, -Math.PI]}>
                  <mesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials.FCD__Glass_All} />
                </group>
                <group name="Sphere001_47" position={[1.873, 3.275, -3.993]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={[2.437, 0.584, 1.702]}>
                  <mesh name="Object_11_1" geometry={nodes.Object_11_1.geometry} material={materials.FCD__GlassAR_G} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/cameraModel.glb')
