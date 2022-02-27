import React, { useState, useEffect } from "react";
// import { Container, Col, Row } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
// import Move from "./Move";
import { ScrollLinkButton } from "./ScrollLinkButton";

export default function Block(props) {
  const [offsetY, setOffsetY] = useState(0);
  const [mobile, setMobile] = useState();
  const handleScroll = () => setOffsetY(window.pageYOffset);
  console.log(offsetY);
  let textsize = offsetY / 12;
  // const bg1 = `https://images.pexels.com/photos/886521/pexels-photo-886521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260
  // `;

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setMobile(window.innerWidth <= 768);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container
      fluid
      style={{
        textAlign: "center",
        color: "black",
        overflowX: "hidden",
        transition: "ease 4s",
      }}
    >
      <Row
        id="test"
        // className="observed"
        style={{
          backgroundColor: "transparent",
          transition: " all 2s ease-out",
          backdropFilter: mobile
            ? offsetY > 120 && offsetY < 1050 && "blur(20px)"
            : offsetY > 320 && offsetY < 1050 && "blur(20px)",
          margin: !mobile && "1rem 2rem",

          // backdropFilter: !mobile && offsetY > 550 && "blur(90px)",

          // backdropFilter:
          //   !mobile && offsetY > 320 && offsetY < 1050 && "blur(25px)",

          // !mobile && offsetY > 620 && "blur(23px)"

          // borderRadius: "10px 10px 0% 0%",
          // background: `no-repeat  url( https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm309-adj-05.jpg?w=1300&dpr=1&fit=default&crop=default&q=80&vib=3&con=3&usm=15&bg=F4F4F3&auto=format&ixlib=js-2.2.1&s=146e6c3224a2fe471b3be1066ff82bfe)fixed center center/cover`,
          // margin: !mobile && (offsetY >= 500 ? "15px" : "16%"),
          height: offsetY >= 320 ? (mobile ? "188vh" : "90%") : `40vh`,
          overflow: "hidden",
        }}
      >
        <div
          className=" topCol about-me-title"
          style={{
            fontSize: offsetY >= 400 ? `1.9rem` : `.5rem`,
            color: "#FFFF",
            transition: "all 1s ease",
            letterSpacing: mobile ? "0px" : "47px",
            // background: `no-repeat  url( ${bg1})fixed center center/cover`,
            textAlign: "center",
            width: "90vw",
            height: "100vh",
            backgroundColor: "#93939300",
            padding: "138px",
            display: mobile && `none`,
            // fontFamily: `"Nothing You Could Do", cursive`,
            transform: mobile
              ? ` translateY(0px)`
              : ` translateY(${offsetY * 0.03}px)`,
            // marginTop: "5rem",
            marginBottom: mobile ? ".5rem" : "-3rem",
            marginTop: mobile ? "2rem" : "9rem",
            textShadow: `rgb(62 54 54) 4px -5px 0px`,
            // transition: "font-size s  ease",

            // borderBottom: "35px solid rgb(119, 0, 6)",

            // borderRadius: "0px 0px 0px 150px",

            // paddingRight: "10%",
          }}
        >
          {props.greetings}
        </div>
      </Row>

      {/* </div> */}
      {/* </div> */}
    </Container>
  );
}
