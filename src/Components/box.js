import React, { useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

import { Environment } from "@react-three/drei";
// import { useBox } from "@react-three/cannon";

const name = (type) => `Marble021_1K_${type}.jpg`;

function Box(props) {
  const [colorMap, displacementMap, normalMap, roughnessMap] = useLoader(
    TextureLoader,
    [name("Color"), name("Displacement"), name("NormalDX"), name("Roughness")]
  );

  //  useCanon

  // This reference will give us direct access to the THREE.Mesh object
  // const [ref, api] = useBox(() => ({
  //   mass: 100,
  //   position: props.position,
  //   args: [4, 1000000, 10000],
  //   ...props,
  // }));

  const ref = useRef();

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame(({ clock, set }, state, delta) => {
    // const currentPos = window.scrollY / 5000
    // const curTop = viewportHeight;
    // const curY = ref.current.rotation.z;
    // const nextY = (curTop / ((3 - 1) * viewportHeight)) * Math.PI;
    // ref.current.rotation.z = THREE.MathUtils.lerp(curY, nextY, 0.1);
    ref.current.rotation.x += 0.0005;
    ref.current.rotation.y += 0.005;
  });

  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      //   position={[1, -2, 1]}
      ref={ref}
      scale={active ? 5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerMove={(e) => {
        e.stopPropagation();

        e.eventObject.rotation._y += (e.point.x * 0.000009) / 3;
        // e.eventObject.rotation._x += (e.point.y * 0.000009) / 6;
        // e.clientX
        // console.log(e.eventObject.rotation._x);
      }}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
      castShadow
    >
      <boxGeometry attach="geometry" args={props.args} />
      <meshStandardMaterial
        attach="material"
        displacementScale={0.01}
        map={colorMap}
        displacementMap={displacementMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        matelaness={1}
        roughness={0.5}
        color={hovered ? "darkred" : props.color}
      ></meshStandardMaterial>

      <Environment
        background={false} // Whether to affect scene.background
        files={[]} // Array of cubemap files OR single equirectangular file
        path={"/"} // Path to the above file(s)
        preset={"city"} // Preset string (overrides files and path)
        scene={undefined} // adds the ability to pass a custom THREE.Scene
      />
    </mesh>
  );
}

export default Box;
