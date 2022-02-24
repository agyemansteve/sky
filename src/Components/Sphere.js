import React, { useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { Environment } from "@react-three/drei";
// import { useSphere } from "@react-three/cannon";

const name = (type) => `Marble021_1K_${type}.jpg`;

function Sphere(props) {
  const [colorMap, displacementMap, normalMap, roughnessMap] = useLoader(
    TextureLoader,
    [name("Color"), name("Displacement"), name("NormalDX"), name("Roughness")]
  );

  // This reference will give us direct access to the THREE.Mesh object
  // const [ref, api] = useSphere(() => ({
  //   mass: 0,
  //   position: props.position,
  //   args: [10, 1000, 1000],
  //   ...props,
  // }));

  const ref = useRef();

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame(({ clock }, state, delta) => {
    ref.current.rotation.x += 0.02;

    // api.position = Math.sin(clock.getElapsedTime());
    ref.current.rotation.y += 0.002;
  });

  //   const colorMap = useLoader(TextureLoader, "/images/1.jpg");

  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      //   position={[1, -2, 1]}
      ref={ref}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      // onPointerMove={(e) => {
      //   e.stopPropagation();
      //   e.camera.rotateX = e.clientY;
      //   console.log(e.camera.rotateX);
      // }}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
      castShadow
    >
      {/* <spotLight position={[-1, 0, 20]} angle={1} intensity={5} /> */}
      <sphereGeometry attach="geometry" args={[10, 1000, 1000]} />
      <meshStandardMaterial
        attach="material"
        displacementScale={0.01}
        map={colorMap}
        displacementMap={displacementMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        matelaness={5}
        roughness={0}
        color={hovered ? "yellow" : "darkred"}
      />

      {/* <Environment
        background={false} // Whether to affect scene.background
        files={[]} // Array of cubemap files OR single equirectangular file
        path={"/"} // Path to the above file(s)
        preset={"city"} // Preset string (overrides files and path)
        scene={undefined} // adds the ability to pass a custom THREE.Scene
      /> */}
    </mesh>
  );
}

function BigSphere(props) {
  const [colorMap, displacementMap, normalMap, roughnessMap] = useLoader(
    TextureLoader,
    [name("Color"), name("Displacement"), name("NormalDX"), name("Roughness")]
  );

  // This reference will give us direct access to the THREE.Mesh object
  // const [ref, api] = useSphere(() => ({
  //   mass: 100,
  //   position: props.position,
  //   args: [10, 1000, 1000],
  //   ...props,
  // }));

  const ref = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame(({ clock }, state, delta) => {
    ref.current.rotation.x += 0.01;

    // api.position = Math.sin(clock.getElapsedTime());
    ref.current.rotation.y += 0.002;
  });

  //   const colorMap = useLoader(TextureLoader, "/images/1.jpg");

  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      //   position={[1, -2, 1]}
      ref={ref}
      scale={active ? 1 : 10}
      onClick={(event) => setActive(!active)}
      // onPointerMove={(e) => {
      //   e.stopPropagation();

      //   // e.eventObject.rotation._y += (e.point.x * 0.000009) / 3;
      //   // e.eventObject.rotation._x += (e.point.y * 0.000009) / 6;
      // }}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
      castShadow
    >
      {/* <spotLight position={[-1, 0, 20]} angle={1} intensity={5} /> */}
      <sphereGeometry attach="geometry" args={props.args} />
      <meshStandardMaterial
        attach="material"
        displacementScale={0.01}
        map={colorMap}
        displacementMap={displacementMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        matelaness={5}
        roughness={0}
        color={hovered ? "darkred" : "yellow"}
      />

      <Environment
        background={false} // Whether to affect scene.background
        // files={[]} // Array of cubemap files OR single equirectangular file
        // path={"/"} // Path to the above file(s)
        preset={"sunset"} // Preset string (overrides files and path)
        scene={undefined} // adds the ability to pass a custom THREE.Scene
      />
    </mesh>
  );
}

export { Sphere, BigSphere };
