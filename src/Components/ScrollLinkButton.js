import React from "react";
// import './Button.css';
import { Link } from "react-scroll";

// const STYLES = ["btn--primary", "btn--outline", "btn--test"];

// const SIZES = ["btn--medium", "btn--large"];

export const ScrollLinkButton = ({
  children,

  onClick,
  to,
}) => {
  // const checkButtonStyle = STYLES.includes(buttonStyle)
  //   ? buttonStyle
  //   : STYLES[0];

  // const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link
      onClick={onClick}
      to={to}
      spy={false}
      style={{ cursor: "pointer" }}
      // className="nav-links"
      smooth={true}
      hashSpy={false}
      ignoreCancelEvents={true}
      // isDynamic={true}
      offset={45}
      // spyThrottle={10000}
      // duration={60000}
      // delay={6000}
      // className="nav-links"
    >
      {children}
      {/* <button
        // className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        style={{ display: display, background: "transparent" }}
        onClick={onClick}
        type={type}
      >
       
      </button> */}
    </Link>
  );
};
