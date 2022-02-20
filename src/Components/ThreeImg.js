import React, { Suspense, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import "../Shaders/ImageFadeMaterial";
import { useSpring, a } from "@react-spring/three";

// const AimageFadeMaterial = a(ImageFadeMaterial);

export default function ThreeImg(props) {
  const [hovered, setHover] = useState(false);

  const ref = useRef();
  const meshRef = useRef();
  // const { progress } = useSpring({ progress: hovered ? 1 : 0 });
  // console.log(progress);

  const [texture1, texture2, dispTexture] = useLoader(THREE.TextureLoader, [
    props.img1,
    props.img2,
    props.disp,
  ]);
  const { viewport, mouse } = useThree();
  let x = (mouse.x * viewport.width) / 30;
  let y = (mouse.y * viewport.width) / 30;

  let vec = new THREE.Vector3();
  useFrame(({ clock }) => {
    // clock.
    // meshRef.current.position.lerp(vec.set(x, y, 1), 1);
    // meshRef.current.rotation.x += 0.01;

    ref.current.dispFactor = THREE.MathUtils.lerp(
      ref.current.dispFactor,
      hovered,
      0.05
    );
  });

  return (
    <mesh
      ref={meshRef}
      scale={[viewport.width / 3, viewport.height / 1.5, 5]}
      onPointerMove={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
      onClick={() => {
        const ele = document.querySelector(".projectTitle");
        const about = document.querySelector(".projectAbout");
        const img = document.querySelector(".projectImg");

        ele.innerHTML = props.title;
        about.innerHTML = props.dis;
        img.src = props.disp;
        // meshRef.current.rotation.x += 10;
      }}
      position={props.position}
      castShadow
      receiveShadow
    >
      <boxGeometry attach="geometry" args={[1.5, 1, 0.5]} />
      <imageFadeMaterial
        attach="material"
        ref={ref}
        tex={texture1}
        tex2={texture2}
        disp={dispTexture}
      />
    </mesh>
  );
}

// return (
//   <Canvas camera={{ position: [0, 0, 2], fov: 31 }}>
//     <Suspense fullback={null}>
//       <Img />
//     </Suspense>
//   </Canvas>
// );
// }
