import React, { Suspense, useEffect, useMemo, useState } from "react";
import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { useTransition, a, config } from "@react-spring/web";
import shuffle from "lodash.shuffle";
import projectPng from "../images/projects.png";
import img1 from "../images/img1.jpg";

import bbxo from "../images/bbxo.png";
import palms from "../images/palms.png";
import bbxobg from "../images/bbxobackground.png";
import palmsbg from "../images/palmsbackground.png";
import img4 from "../images/img4.jpg";

import img5 from "../images/img5.jpg";
import img6 from "../images/img6.jpg";
import img7 from "../images/img7.jpg";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import ThreeImg from "./ThreeImg";
import { Html, softShadows } from "@react-three/drei";
import rawPng from "../images/rawpixel2.png";

softShadows();

const data = [
  {
    img1: projectPng,
    img2: projectPng,
    img3: projectPng,
    title: "",
    dis: "",
    projectImg: projectPng,
  },
  {
    img1: bbxobg,
    img2: img4,
    img3: img5,
    title: "bbx.netlify.app",
    dis: "dwoeinfowinef",
    projectImg: bbxo,
  },
  {
    img1: palmsbg,
    img2: img5,
    img3: img6,
    title: "palms.netlify.app",
    dis: "dwoeinfowinef",
    projectImg: palms,
  },
  {
    img1: img7,
    img2: img1,
    img3: img4,
    title: "titile 788",
    dis: "dwoeinfowinef",
    projectImg: 300,
  },
  // {
  //   img1: img3,
  //   img2: img4,
  //   img3: img5,
  //   title: "titile 67697",
  //   dis: "dwoeinfowinef",
  //   projectImg: 300,
  // },
  // {
  //   img1: img6,
  //   img2: img7,
  //   img3: img1,
  //   title: "titile p98",
  //   dis: "dwoeinfowinef",
  //   projectImg: 300,
  // },
  //   {
  //     css: "url(https://images.pexels.com/photos/1005644/pexels-photo-1005644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
  //     height: 200,
  //   },
  //   {
  //     css: "url(https://images.pexels.com/photos/227675/pexels-photo-227675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
  //     height: 300,
  //   },
  //   {
  //     css: "url(https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
  //     height: 200,
  //   },
  //   {
  //     css: "url(https://images.pexels.com/photos/327482/pexels-photo-327482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
  //     height: 400,
  //   },
  //   {
  //     css: "url(https://images.pexels.com/photos/988872/pexels-photo-988872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
  //     height: 200,
  //   },
  //   {
  //     css: "url(https://images.pexels.com/photos/249074/pexels-photo-249074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
  //     height: 150,
  //   },
  //   {
  //     css: "url(https://images.pexels.com/photos/310452/pexels-photo-310452.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
  //     height: 400,
  //   },
  //   {
  //     css: "url(https://images.pexels.com/photos/380337/pexels-photo-380337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
  //     height: 200,
  //   },
];

export default function Projects() {
  const [mobile, setMobile] = useState();

  useEffect(() => {
    setMobile(window.innerWidth <= 768);
  }, []);

  function useMedia(queries, values, defaultValue) {
    const match = () =>
      values[queries.findIndex((q) => matchMedia(q).matches)] || defaultValue;
    const [value, set] = useState(match);
    useEffect(() => {
      const handler = () => set(match);
      window.addEventListener("resize", handler);
      return () => window.removeEventListener("resize", handler);
    }, []);
    return value;
  }

  //   {/* <ProjectCard />
  //       <ProjectCard />
  //       <ProjectCard />
  //       <ProjectCard />
  //       <ProjectCard /> */}

  //   const trans = (x, y) => `translate3d(${x}px,${y}px,0)`;
  const columns = useMedia(
    ["(min-width: 1500px)", "(min-width: 1000px)", "(min-width: 600px)"],
    [4, 4, 2],
    2
  );
  // Hook3: Hold items
  const [items, set] = useState(data);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  // console.log(items);
  // Hook4: shuffle data every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => set(shuffle), 5000000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => void setHeight(window.innerHeight), []);
  useEffect(() => void setWidth(window.innerWidth), []);
  // Hook5: Form a grid of stacked items using width & columns we got from hooks 1 & 2

  const [heights, gridItems] = useMemo(() => {
    let heights = new Array(columns).fill(0); // Each column gets a height starting with zero
    let gridItems = items.map((child, i) => {
      const column = heights.indexOf(Math.min(...heights));
      //  console.log(column)
      // Basic masonry-grid placing, puts tile into the smallest column using Math.min
      const xy = [(width / columns) * column, (heights[column] += 600)]; // X = container width / number of columns * column index, Y = it's just the height of the current column
      return {
        ...child,
        xy,
        width: "25rem",
        height: "30rem",
      };
    });
    return [heights, gridItems];
  }, [columns, items, width]);

  // Hook6: Turn the static grid values into animated transitions, any addition, removal or change will be animated
  const transition = useTransition(
    gridItems,
    // items.forEach((item) => item.css),
    {
      //   keys: (item, index) => index,
      from: ({ xy, width, height }) => ({
        xy,
        width,
        height,
        opacity: 0,
      }),
      enter: ({ xy, width, height }) => ({ xy, width, height, opacity: 1 }),
      update: ({ xy, width, height }) => ({ xy, width, height }),
      leave: { opacity: 0 },
      //   reset: true,
      config: { mass: 3, tension: 500, friction: 100 },
      trail: 25,
    }
  );

  /** This component creates a fullscreen colored plane */
  function Background(props) {
    const { viewport } = useThree();
    return (
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -10, 10]}
        receiveShadow
        scale={[viewport.width * 15, viewport.height * 15, 1]}
      >
        <planeGeometry attach="geometry" args={[10, 10]} />
        <shadowMaterial
          Material
          attach="material"
          //   color={props.color}
          transparent
          opacity={0.4}
          //   depthTest={false}
        />
        {/* <meshBasicMaterial
          attach="material"
          color={props.color}
          depthTest={false}
        /> */}
      </mesh>
    );
  }

  const Camera2 = () => {
    const { camera, gl, mouse, viewport } = useThree();
    const controls = new OrbitControls(camera, gl.domElement);
    // controls.autoRotateSpeed = 1;
    controls.autoRotate = false;

    controls.enablePan = false;
    controls.zoomSpeed = 0.1;
    controls.enableZoom = false;
    controls.panSpeed = 0.0001;
    controls.maxDistance = (data.length - 1) * 10;

    const CameraController = ({ vec = new THREE.Vector3(), ...props }) => {
      useFrame(({ clock }) => {
        let x = (mouse.x * viewport.width) / 10;
        // console.log(x);
        let y = (mouse.y * viewport.width) / 10;

        // camera.position.lerp(new THREE.Vector3(x, y, 1), 0.1);

        // camera.position.lerp(vec.set(-x, 0, 1), 1);
        if (camera.position.x > (data.length - 1) * 10 - 1) {
          camera.position.x -= (data.length - 1) * 10 - 1;
        }
        if (camera.position.x < -5) {
          camera.position.x = -5;
          // camera.position.x += x;
        }

        if (x >= 0) {
          camera.position.x += 0.01 * x * 5;
        } else {
          camera.position.x -= 0.01 * x * -5;
        }

        // camera.position.y = 0;
        // camera.position.z = 0;
        // camera.lookAt(vec.set(mouse.x, mouse.y, 1));
        controls.update();
      });
    };

    CameraController(mouse.x, mouse.y);

    return null;
  };

  function Cards() {
    return data.map((data, index) => (
      <ThreeImg
        key={index}
        position={[index * 8, 0, 0]}
        img1={data.img1}
        img2={data.img2}
        disp={data.img3}
        projectImg={data.projectImg}
        title={data.title}
        dis={data.dis}
      />
    ));
  }

  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <Canvas
        colorManagement
        className="canvasText"

        //   camera={{ zoom: 20 }}≈
      >
        <Suspense fallback={null}>
          <Background color={"black"} />
          <color attach="background" args={["white"]} />
          <fog attach="fog" args={["white", 0, 40]} />
          <ambientLight intensity={0.4} />

          <directionalLight castShadow position={[2.5, 8, 5]} intensity={4.5} />
          <Html>
            <div
              className="canvasText projectText"
              style={{
                visibility: "hidden",
                width: mobile ? "100vw" : "50vw",
                pointerEvents: "none",
                position: "relative",
                transition: "all 1s ease",
                left: mobile ? "-46%" : "-88%",
                bottom: "27rem",
              }}
            >
              <h1
                style={{
                  position: "relative",
                  top: "162px",
                  left: "63px",
                  transition: "all 1s ease 300ms",
                }}
                className="projectTitle"
              >
                {" "}
              </h1>

              <img
                className="projectImg"
                style={{
                  // position: "relative",
                  // visibility: "hidden",
                  // top: "-23%",
                  // left: "-4rem",
                  transition: "all 1s ease",
                  width: "100%",
                }}
                // src={}
                alt="project"
              />
              <p
                style={{
                  transition: "all 1s ease 300ms",
                }}
                className="projectAbout"
              >
                {" "}
              </p>
            </div>
          </Html>
          {/* <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -10, 0]}
            receiveShadow
          >
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <shadowMaterial attach="material" transparent opacity={0.4} />
          </mesh> */}
          <Cards />
          <Camera2 />
        </Suspense>
      </Canvas>
    </div>
  );
}
