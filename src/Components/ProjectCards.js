import { Html, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { height } from "dom-helpers";
import React, { Suspense, useEffect } from "react";

import img1 from "../images/img1.jpg";

import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";

import img5 from "../images/img5.jpg";
import img6 from "../images/img6.jpg";
import img7 from "../images/img7.jpg";
import ThreeImg from "./ThreeImg";

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

export default function ProjectCard(props) {
  useEffect(() => {
    //Movement Animation to happen
    // const iamText = document.querySelector(".iamText");
    const imgWrappers = document.querySelectorAll(".project-card");

    imgWrappers.forEach((imgWrapper) => {
      const projectTitle = document.querySelector(".project-title");
      const description = document.querySelector(".info h3");
      const stack = document.querySelector(".project-stack");

      imgWrapper.addEventListener("mousemove", (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 40;
        let yAxis = (window.innerHeight / 2 + e.pageY) / 90;
        imgWrapper.style.transform = `translateY(0rem) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
      });

      imgWrapper.addEventListener("mouseenter", (e) => {
        imgWrapper.style.transition = "none";
        // projectTitle.style.transform = "translateZ(150px)";

        // description.style.transform = "translateZ(1025px)";
        // stack.style.transform = "translateZ(100px)";
      });
      //Animate Out
      imgWrapper.addEventListener("mouseleave", (e) => {
        imgWrapper.style.transition = "all 0.5s ease";
        imgWrapper.style.transform = ` translateY(0rem) rotateY(0deg) rotateX(0deg) `;
        // projectTitle.style.transform = "translateZ(0px)";

        // description.style.transform = "translateZ(0px)";
        // stack.style.transform = "translateZ(0px)";
      });
    });
  }, []);

  return null;
}
