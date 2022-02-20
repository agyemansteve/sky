import React, { useEffect, useMemo, useState } from "react";
import ProjectCard from "./ProjectCards";
import { useTransition, a, config } from "@react-spring/web";
import shuffle from "lodash.shuffle";
import img1 from "../images/img1.jpg";

import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";

import img5 from "../images/img5.jpg";
import img6 from "../images/img6.jpg";
import img7 from "../images/img7.jpg";
import { useThree } from "@react-three/fiber";

const data = [
  {
    img1: img7,
    img2: img1,
    img3: img2,
    title: "titile 2",
    dis: "dwoeinfowinef",
    height: 300,
  },
  {
    img1: img1,
    img2: img2,
    img3: img3,
    title: "titile 1",
    dis: "dwoeinfowinef",
    height: 300,
  },
  {
    img1: img4,
    img2: img5,
    img3: img6,
    title: "titile  3",
    dis: "dwoeinfowinef",
    height: 300,
  },
  {
    img1: img7,
    img2: img1,
    img3: img2,
    title: "titile 788",
    dis: "dwoeinfowinef",
    height: 300,
  },
  {
    img1: img3,
    img2: img4,
    img3: img5,
    title: "titile 67697",
    dis: "dwoeinfowinef",
    height: 300,
  },
  {
    img1: img6,
    img2: img7,
    img3: img1,
    title: "titile p98",
    dis: "dwoeinfowinef",
    height: 300,
  },
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
    [4, 3, 2],
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
      const xy = [(width / columns + 5) * column, (heights[column] += 600)]; // X = container width / number of columns * column index, Y = it's just the height of the current column
      return {
        ...child,
        xy,
        width: "25rem",
        height: "35rem",
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
  function Background({ color }) {
    const { viewport } = useThree();
    return (
      <mesh scale={[viewport.width, viewport.height, 1]}>
        <planeGeometry attach="geometry" args={[1, 1]} />
        <a.meshBasicMaterial
          attach="material"
          color={color}
          depthTest={false}
        />
      </mesh>
    );
  }

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        position: "relative",
        // height: Math.max(...heights),
        background: "rgb(255 255 255)",
        // display: "flex",
        // justifyContent: "space-around",
      }}
    >
      {/* works */}
      {/* {transition((style, item) => (
        <a.div style={style}>
          <h1> {item.height} </h1>
        </a.div>
      ))} */}

      {transition(({ xy, ...style }, item) => (
        <a.div
          className="animatedCard"
          style={{
            transform: xy.to((x, y) => `translate3d(${x}px,${y}px,0)`),
            background: "pink",
            border: "5px solid black",
            position: "absolute",
            padding: "2rem 4rem",
            ...style,
          }}
        >
          <ProjectCard
            img1={item.img1}
            img2={item.img2}
            img3={item.img3}
            title={item.title}
            dis={item.dis}
          />
        </a.div>
      ))}

      {/* {transitions.map(({ item, props: { xy, ...rest }, key }) => (
          <a.div
            key={key}
            style={{
              transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`),
              ...rest,
            }}
          >
            <h1> {item.height} </h1>
          </a.div>
        ))} */}
      {/* <ProjectCard />
      
        <ProjectCard />
        <ProjectCard />
        <ProjectCard /> */}
    </div>
  );
}
