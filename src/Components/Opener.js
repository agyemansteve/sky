import React, { useState, useCallback, useRef, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";

// import styles from "./styles.module.css";

export default function Opener(props) {
  const reset = useCallback(() => {
    // ref.current.forEach(clearTimeout);
    clearTimeout(ref.current);
    ref.current = "";
    // set("");
    ref.current = setTimeout(() => set(props.first), 900);
    ref.current = setTimeout(() => set(props.second), 2000);
    ref.current = setTimeout(() => set(props.third), 4000);
    // ref.current.push(setTimeout(() => set(props.second), 10000));
    // ref.current.push(setTimeout(() => set(props.third), 15000));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ref = useRef([]);
  const { offsetY } = props;
  const { mobile } = props;
  const [items, set] = useState([""]);
  const transitions = useTransition(items, {
    from: {
      // color: "black",
      opacity: 0,
      color: "black",

      // transform: "scale(.9)",
    },

    enter: [
      {
        opacity: 1,
        color: "white",

        // transform: "scale(1.1)",
        // config: { duration: 3000 },
      },
    ],
    leave: [
      {
        // transform: "scale(.9)",
        // innerHeight: 0,
        // height: 0,
        // color: "black",
        opacity: 0,
      },
    ],
    // config: { duration: 3000 },

    // delay: 200,
    // update: { color: "#FFF" },
  });

  useEffect(() => {
    reset();
    return () => clearTimeout(ref.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        // width: "600px",
        left: mobile ? "26%" : "43%",
        width: mobile ? "100%" : offsetY < 10 || offsetY > 600 ? "105%" : "10%",
        top: "48vh",
        margin: mobile ? "24%" : "85px",
        // transition: "all .5s ease",
        padding: "1rem 3rem",

        textShadow: `rgb(62 54 54) 4px -5px 0px`,
        // background: "black",
        opacity: offsetY < 1 ? `1` : `0`,
        // fontSize: "30rem",
        /* font-family: monospace; */
        // transform: `translateY(${offsetY}px)`,
        transform: "translate(-50%, -50%)",
        zIndex: "9",
        position: "absolute",
      }}
      // className={styles.container}
    >
      <div
      // style={{ height: mobile ? "15px" : "35px ", overflow: "hidden" }}
      //   className={styles.main}
      >
        {transitions(({ innerHeight, ...rest }, item) => (
          <animated.div
            //   className={styles.transitionsItem}

            style={rest}
            onClick={reset}
          >
            <animated.div
              style={{
                // overflow: "hidden",
                // background: !mobile && "black",
                // transition: "width 2s",
                // opacity: offsetY < 10 || offsetY > 600 ? `1` : `0`,
                // padding: "1rem 3rem",
                fontSize: mobile
                  ? ".8rem"
                  : offsetY < 10
                  ? `6.2rem`
                  : `${offsetY / 10}px`,
                // fontFamily: "'Nothing You Could Do'",

                // transform: `translate3d(${
                //   -offsetY * 2
                // }px, ${-offsetY}px, ${-offsetY}px)`,
                // transform: `translateX(${-offsetY}px)`,

                // height: innerHeight,
                // fontSize: "20rem",
              }}
            >
              {item}
            </animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  );
}
