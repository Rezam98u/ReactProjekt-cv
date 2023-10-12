import * as THREE from "three";
import { React, Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, useGLTF, Environment, Stage } from '@react-three/drei';

import Shoe from "./components/Shoe";
import Hero from "./components/Hero";
import Who from "./components/Who";
import CanvasLoader from "./components/Loader";

import { Model } from './components/Desktop'
import { useNavigate } from "react-router-dom";

///////////////////////////
// const scene = new THREE.Scene()
// const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000)

// camera.position.set(5, 5, 5);
// camera.rotation.x = -45 * THREE.MathUtils.DEG2RAD;

// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshPhongMaterial({ color: "rgb(10,180,180)" });

// const mesh = new THREE.Mesh(geometry, material);
// // mesh.rotation.y = 45 * THREE.MathUtils.DEG2RAD;
// mesh.rotation.x += 0.01;
// mesh.rotation.y += 0.01;
// scene.add(mesh);

// const light = new THREE.PointLight("white", 1, 100);
// light.position.set(5, 10, 10);
// scene.add(light);

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// renderer.render(scene, camera)

/////////////////////////
// const Box = () => {
//     return (
//         // <mesh>
//         //     <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
//         //     <meshStandardMaterial attach="material" color="orange" />
//         // </mesh>
//         <mesh rotation={[0, 0, 0]} >
//             <boxGeometry args={[1, 1, 1]} />
//             <meshStandardMaterial color={"orange"} />
//         </mesh >
//     )
// }

/////////////////////////
// const Computers = ({ isMobile }) => {
//     const computer = useGLTF("../../public/desktop_pc/scene.gltf")

//     return (
//         <mesh>
//             <hemisphereLight intensity={0.15} groundColor='black' />
//             <spotLight
//                 position={[-20, 50, 10]}
//                 angle={0.12}
//                 penumbra={1}
//                 intensity={1}
//                 castShadow
//                 shadow-mapSize={1024}
//             />
//             <pointLight intensity={1} />
//             <primitive
//                 object={computer.scene}
//                 scale={isMobile ? 0.7 : 0.75}
//                 position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
//                 rotation={[-0.01, -0.2, -0.1]}
//             />
//         </mesh>
//     )
// }



const ThreeJs = () => {
    const navigate = useNavigate()
    return (
        <>
            <div>
                <div className="bg-[#10182f] relative">
                    <div className="text-white absolute top-6 left-11">
                        <button onClick={() => navigate("/")}> Home </button>
                    </div>
                    <div className="h-screen w-[90%] mx-auto flex items-center gap-2 ">

                        {/* <div className="h-screen">
                        <Canvas camera={{ fov: 95, position: [2, 2, 2] }}>
                            <Suspense fallback={null}>
                                <Stars />
                                <ambientLight intensity={2} />
                                <pointLight position={[10, 10, 10]} intensity={0.5} />
                                <Box />
                                <Model />
                                <Environment preset="city" background />
                                <OrbitControls />
                            </Suspense>
                        </Canvas>
                        </div> */}

                        <div className='flex flex-col justify-center items-center mx-2'>
                            <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
                            <div className='w-1 h-40 bg-gradient-to-b from-violet-400 to-violet-900' />
                        </div>

                        <div className="text-white text-3xl">
                            <h1>
                                Hi, I'm <span className='text-[#915EFF]'>Reza</span>
                            </h1>
                            <p className="break-normal whitespace-normal">
                                I develop user interfaces and web applications <br className='sm:block hidden' />
                            </p>
                        </div>

                        <Canvas>
                            <Suspense fallback={<CanvasLoader />}>
                                <Stage intensity={0.6}>
                                    <Model />
                                </Stage>
                                <OrbitControls enableZoom={false} autoRotate />
                            </Suspense>
                        </Canvas>

                        {/* <Hero />
                    <Who /> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThreeJs;
