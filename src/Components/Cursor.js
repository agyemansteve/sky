// import { position } from "dom-helpers";
import React, { useState, useEffect } from "react";
import "./Cursor.css";

export default function Cursor(props) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", setFromEvent);

    // return () => {
    //   window.removeEventListener("mousemove", setFromEvent);
    // };
  }, []);

  return (
    <div
      style={{
        width: "5rem",
        height: "5rem",
        pointerEvents: "none",
        opacity: props.offsetY > 400 && "1",
        // cursor: "none",
        zIndex: "2",
        backdropFilter: "invert(1)",
        border: ".5px solid #0000005e",
        borderRadius: "50%",
        position: "absolute",
        transform: "translate(-50%,-50%)",
        top: `${position.y}px`,
        left: `${position.x}px`,
      }}
    ></div>
  );
}
