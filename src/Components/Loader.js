import Spinner from "react-bootstrap/Spinner";
import React, { useState } from "react";
import { useTransition, animated } from "@react-spring/web";
import img2 from "../images/img2.jpg";
import img1 from "../images/img1.jpg";
import img3 from "../images/img3.jpg";

const slides = [img2, img3, img2];
export default function Loader() {
  const [index, set] = useState(0);
  const transitions = useTransition(index, {
    key: index,
    from: {
      opacity: 0.5,
      // width: "60vw",
      margin: "auto",
      transform: "scale(1.2)",
      transformOrigin: "center",
    },
    enter: {
      opacity: 1,
      // width: "0vw",
      // background: "black",
      margin: "auto",

      transform: "scale(1) ",
      transformOrigin: "center",
    },
    leave: {
      opacity: 0,
      // background: "black",

      margin: "auto",

      // transform: "scale(.9)",

      transformOrigin: "right",
    },
    config: { duration: 2000 },
    onRest: (_a, _b, item) => {
      if (index === item) {
        set((state) => (state + 1) % slides.length);
      }
    },
    exitBeforeEnter: true,
  });
  return (
    <div
      style={
        {
          // background: "black",
        }
      }
    >
      {transitions((style, i) => (
        <animated.div
          // className={styles.bg}
          style={{
            ...style,
            overflow: "hidden",
            position: "absolute",
            top: "0",
            left: "0",
            // marginTop: "5rem",
            filter: "hue-rotate(158deg) brightness(.1)",
            width: "100vw",
            height: "100vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
            willChange: "opacity",
            backgroundColor: "black",

            backgroundImage: `url(${slides[i]})`,
          }}
        >
          <div
            style={{
              // backgroundColor: "black",
              height: "100vh",
              padding: "10rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/* <Spinner
              style={{
                color: "#00908f",
                margin: "40px",
                borderWidth: ".5rem",
                height: "14rem",
                width: "14rem",
                clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
              }}
              animation="grow"
              size="sm"
            /> */}

            <Spinner
              style={{
                color: "yellow",
                margin: "40px",
                borderWidth: "1rem",
                height: "24rem",
                width: "24rem",
                clipPath:
                  "polygon(0 25%, 35% 25%, 35% 0%, 65% 0%, 65% 25%, 100% 25%, 100% 60%, 65% 61%, 65% 100%, 35% 100%, 35% 60%, 0 59%)",
              }}
              animation="border"
              size="sm"
            ></Spinner>

            {/* <Spinner
              style={{
                color: "#00908f",
                margin: "40px",
                borderWidth: ".5rem",
                height: "14rem",
                width: "14rem",
                clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
              }}
              animation="grow"
              size="sm"
            /> */}
          </div>
        </animated.div>
      ))}
    </div>
  );
}
