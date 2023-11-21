'use client'

import {useRef} from 'react'
import { Canvas ,useFrame,useLoader} from "@react-three/fiber";
import {TextureLoader} from 'three/src/loaders/TextureLoader'
import * as THREE from 'three'
import { Mesh } from 'three'
const Cube =()=>{
    const color = new THREE.Color("#F4E869")
    const mesh = useRef(null)
    useFrame((state,delta) => {
        if (mesh.current) {
          //mesh.current.rotation.x += delta*0.25;
          mesh.current.rotation.y += delta*0.25;
         // mesh.current.rotation.z += delta*0.25;
        }
      });
      const texture_1 = useLoader(TextureLoader,"/assets/js.png")
      const texture_2 = useLoader(TextureLoader,"/assets/react.png")
      const texture_3 = useLoader(TextureLoader,"/assets/next.png")
    
return(
    
        <mesh ref={mesh}>
            <boxGeometry args={[3,3,3]} />
            <meshStandardMaterial map={texture_1} attach="material-0" />
            <meshStandardMaterial map={texture_2} attach="material-1"/>
            <meshStandardMaterial map={texture_3} attach="material-2"/>
            <meshStandardMaterial map={texture_3} attach="material-3"/>
            <meshStandardMaterial map={texture_3} attach="material-4"/>
            <meshStandardMaterial map={texture_3} attach="material-5"/>
        </mesh>
)
}
export default Cube;