import React from 'react';
import * as THREE from "three";

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';



///////////////////////////
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    10
);

camera.position.set(5, 5, 5);

camera.rotation.x = -45 * THREE.MathUtils.DEG2RAD;

const geometry = new THREE.BoxGeometry(1, 1, 1);

const material = new THREE.MeshPhongMaterial({ color: "rgb(10,180,180)" });

const mesh = new THREE.Mesh(geometry, material);

mesh.rotation.y = 45 * THREE.MathUtils.DEG2RAD;

scene.add(mesh);

const light = new THREE.PointLight("white", 1, 100);

light.position.set(5, 10, 10);

scene.add(light);

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

renderer.render(scene, camera)


function Box() {
    return (
        // <mesh>
        //     <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        //     <meshStandardMaterial attach="material" color="orange" />
        // </mesh>
        <mesh rotation={[45, 5, 0]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={"orange"} />
        </mesh>
    )
}

const ThreeJs = () => {
    useGLTF.preload("skull.gltf")

    return (
        <>
            <div className="App">
                <Canvas>
                    <ambientLight intensity={2} />
                    <pointLight position={[10, 10, 10]} intensity={0.5} />
                    <Box />
                    <OrbitControls />
                </Canvas>
            </div>
        </>
    )
}

export default ThreeJs;
