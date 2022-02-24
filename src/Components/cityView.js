import React, { Suspense, useEffect, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree, extend } from "@react-three/fiber";
// import img1 from "../images/img1.jpg";

import img2 from "../images/img2.jpg";
// import img2 from "../images/img2.jpg";
// import img3 from "../images/img3.jpg";
// import { Physics } from "@react-three/cannon";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import Move from "./Move";
// import Spinner from "react-bootstrap/Spinner";
// import Button from "react-bootstrap/Button";
// import { Link } from "react-router-dom";
import ThreeImg from "./ThreeImg";
// import img1 from "../images/img1.jpg";

import {
  Billboard,
  // Text,
  Effects,
  Environment,
  // OrbitControls as DreiControls,
  Preload,
  Html,
  // Cloud,
  // Plane,
} from "@react-three/drei";

import { GlitchPass } from "three/examples/jsm/postprocessing/GlitchPass";
import { FilmPass } from "three/examples/jsm/postprocessing/FilmPass";

import Box from "./box";
import ContactForm from "./ContactForm";

// import { Sphere, BigSphere } from "./Sphere";

extend({ GlitchPass, FilmPass });

const Camera2 = () => {
  const { camera, gl, mouse, viewport } = useThree();

  const controls = new OrbitControls(camera, gl.domElement);

  // controls.minDistance = 0.09;
  // controls.screenSpacePanning = false;

  // controls.autoRotateSpeed = 1;
  controls.autoRotate = true;
  // controls.enableDamping = true;
  // controls.dampingFactor = 0.125;
  controls.enablePan = false;
  // controls.zoomSpeed = 0.1;
  controls.enableZoom = false;
  // controls.panSpeed = 0.001;
  // controls.rotateSpeed = 0.5;

  // controls.maxDistance = 19000;
  // controls.update();

  useFrame(() => {
    // console.log(mouse.x);
    const x = (mouse.x * viewport.width) / 4 + 1;
    const y = (mouse.y * viewport.width) / 4 + 1;

    // camera.position.x = (mouse.x * viewport.width) / 4;
    // camera.position.y = (mouse.y * viewport.width) / 4;
    camera.position.set(-10, 0, 10);
    camera.position.lerp(new THREE.Vector3(x, y, 1), 0.5);
    // if (camera.position.x <= -950) {
    //   camera.position.x = 900;
    //   camera.position.z -= 200;
    // } else {
    //   if (camera.position.y < -1) {
    //     camera.position.y += 70;
    //     camera.position.x += 1;
    //     // camera.position.z += 0.4;
    //   } else {
    //     // console.log(camera.position.x);

    //     camera.position.z -= 20;
    //     // controls spped
    //     camera.position.x -= 10;
    //     // camera.position.y += 30;

    //     // camera.position.y -= 1000;
    //     // controls.enableZoom = false;
    //     camera.up.set(0, 1, 0);
    controls.update();
    //   }
    // }

    // // camera.position.z = -6000 && (camera.position.x -= 20);
    // controls.update();
  });

  return null;
};

const BillboardGroup = () => {
  const follow = ("follow", true);
  const lockX = ("lockX", false);
  const lockY = ("lockY", false);
  const lockZ = ("lockZ", false);
  // const img1 = `me.png`;
  return (
    <>
      <group position={[0, 0, 0]}>
        <Billboard
          follow={follow}
          lockX={lockX}
          lockY={lockY}
          lockZ={lockZ}
          position={[-4, -2, 0]}
        >
          {/* <ThreeImg args={[3, 2]} img={img1} /> */}
          {/* <Plane args={[3, 2]} material-color="red" /> */}
          {/* <Box args={[0.001, 5, 5]} position={[0, 0, 0]} /> */}
        </Billboard>

        <Billboard
          follow={follow}
          lockX={lockX}
          lockY={lockY}
          lockZ={lockZ}
          position={[-4, 2, 0]}
        >
          {/* <Plane args={[3, 2]} material-color="orange" /> */}
          {/* <Box args={[0.001, 5, 5]} position={[0, 0, 0]} /> */}
        </Billboard>

        <Billboard
          follow={follow}
          lockX={lockX}
          lockY={lockY}
          lockZ={lockZ}
          position={[0, 0, 0]}
        >
          <Box args={[0.03, 5, 5]} position={[0, 0, 0]} />
          <Box args={[0.03, 5, 5]} position={[0, 1, 0]} />
          <Box args={[0.03, 5, 5]} position={[0, -1, 0]} />
          <Box args={[0.03, 5, 5]} position={[0, 2, 0]} />
          <Box args={[0.03, 5, 5]} position={[0, -2, 0]} />
          <Box args={[0.03, 5, 5]} position={[0, 3, 0]} />
          <Box args={[0.03, 5, 5]} position={[0, -3, 0]} />

          {/* <ThreeImg args={[1, 1]} img1={img1} img2={img2} disp={img3} /> */}

          <Html>
            <div
              style={{
                position: "relative",
                /* top: 3%; */
                transform: " translate(-50%,-50%)",
              }}
              className="contact  canvasText"
            >
              {" "}
              <ContactForm />
            </div>
          </Html>
        </Billboard>

        <Billboard
          follow={follow}
          lockX={lockX}
          lockY={lockY}
          lockZ={lockZ}
          position={[4, -2, 0]}
        >
          {/* <Plane args={[3, 2]} material-color="blue" />
           */}{" "}
          {/* <Box args={[0.001, 5, 5]} position={[0, 0, 0]} /> */}
        </Billboard>

        <Billboard
          follow={follow}
          lockX={lockX}
          lockY={lockY}
          lockZ={lockZ}
          position={[4, 2, 0]}
        >
          {/* <Plane args={[3, 2]} material-color="yellow" /> */}{" "}
          {/* <Box args={[0.001, 5, 5]} position={[0, 0, 0]} /> */}
        </Billboard>
      </group>
    </>
  );
};

const Cityview = (props) => {
  const [mobile, setMobile] = useState();
  // const [show, setShow] = useState();

  useEffect(() => {
    setMobile(window.innerWidth <= 768);
    // const showTimeout = setTimeout(() => setShow(true), 20000);
    // return () => clearTimeout(showTimeout);
  }, []);

  return (
    <div
      style={{
        overflowX: "hidden",
        background: mobile
          ? `url(${img2}) center center/cover`
          : `url(${img2}) center center/cover fixed`,
        filter: " invert(1)",
      }}
      className="cityView "
    >
      <div>
        <Canvas
          className="canvasText"
          style={{ height: "100vh" }}
          // className="observed"
          camera={{
            // position: [20, 0, 0],

            fov: 90,
            zoom: 1,
            near: 0.001,
            far: 19000,
          }}
        >
          <Camera2 />
          <Suspense fallback={null}>
            <directionalLight castShadow position={[0, 0, 0]} intensity={1.5} />

            <group>
              {/* <Effects>
                <glitchPass attachArray="passes" />
              </Effects> */}

              <pointLight
                position={[11170, 1000, 5000]}
                color="red"
                intensity={0.1}
              />
              <pointLight
                position={[-1170, -1000, 5000]}
                color="red"
                intensity={0.1}
              />

              <BillboardGroup />
              {/* <Box args={[300, 10000, 300]} position={[1810, 840, 810]} />
                <Box args={[300, 10000, 300]} position={[-1810, -840, -810]} />
                <Box args={[300, 10000, 300]} position={[810, 840, 1810]} />
                <Box args={[300, 10000, 300]} position={[-810, -840, -1810]} /> */}
              {/* 
                <Box args={[300, 100, 3000]} position={[1810, 240, 410]} />
                <Box args={[300, 100, 3000]} position={[-1810, -240, -410]} />
                <Box args={[300, 100, 3000]} position={[410, 240, 1810]} />
                <Box args={[300, 100, 3000]} position={[-410, -240, -1810]} /> */}
              {/* <Box args={[0.001, 6, 6]} position={[2, 0, 0]} />

              <Box args={[0.001, 6, 6]} position={[-2, 0, 0]} /> */}
              {/* <Box args={[1, 1, 1]} position={[0, -2, 0]} /> */}

              {/* <Box args={[1, 1, 1]} position={[-2, 0, 0]} />
              <Box args={[1, 1, 3]} position={[10, 0, 8]} /> */}
              {/* <Environment
                background={true} // Whether to affect scene.background
                // files="venice.hdr" // Array of cubemap files OR single equirectangular file
                // path={"/"}
                // Path to the above file(s)
                preset={"sunset"} // Preset string (overrides files and path)
                scene={undefined} // adds the ability to pass a custom THREE.Scene
              /> */}

              <Preload all />
            </group>
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Cityview;
