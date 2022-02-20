import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "react-use-gesture";

export default function Move(props) {
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

  const bind = useDrag(({ offset: [x, y] }) => api.start({ x, y }));

  // const bind = useDrag(
  //   ({ down, movement: [mx, my] }) =>
  //     api.start({
  //       x: down ? mx : 0,
  //       y: down ? my : 0,
  //       // scale: down ? 1.2 : 0.9,
  //     })
  //   // { delay: 1000 }
  // );
  // Bind it to a component
  return (
    <animated.div {...bind()} style={{ x, y }}>
      {props.children}
    </animated.div>
  );
}
