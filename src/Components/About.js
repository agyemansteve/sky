import React, { useEffect, useState } from "react";

import Row from "react-bootstrap/Row";

import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import img1 from "../images/img1.jpg";

import img2 from "../images/img2.jpg";

import Container from "react-bootstrap/Container";

export default function IAM() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  const [mobile, setMobile] = useState();

  //   const { offsetY } = props;
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobile(window.innerWidth <= 768);
    // const showTimeout = setTimeout(() => setShow(true), 20000);
    // return () => clearTimeout(showTimeout);
  }, []);

  useEffect(() => {
    //Movement Animation to happen
    // const iamText = document.querySelector(".iamText");
    const aboutCards = document.querySelectorAll(".aboutCard");
    const IamText = document.querySelector(".iamText");

    IamText.addEventListener("mouseenter", () => {
      IamText.style.transition = `all 0.5s ease`;
      IamText.style.filter = " none";
      // IamText.style.transform = `scale(1.1)`;
    });

    IamText.addEventListener("mouseleave", () => {
      // IamText.style.filter = "invert(1) ";
    });

    // mainVideo.addEventListener("mouseenter", (e) => {
    //   mainVideo.style.transition = `all 1.5s ease`;
    //   mainVideo.style.filter = " drop-shadow(black 2px 4px 5px)";
    //   // mainVideo.style.transform = `scale(1.1)`;
    // });

    // mainVideo.addEventListener("mouseleave", (e) => {
    //   mainVideo.style.transform = `none`;
    //   mainVideo.style.transition = `all 0.5s ease`;
    //   mainVideo.style.filter = "grayscale(1) drop-shadow(black 2px 4px 6px)";

    //   // mainVideo.style.transform = `scale(1)`;
    // });

    aboutCards.forEach((card) => {
      card.addEventListener("mouseenter", (e) => {
        const ele = e.target.children[0];

        card.style.transition = "all 1s ease";
        ele.children[0].style.height = "10%";
        ele.children[0].style.background = "#ffffff00";
        // ele.children[0].style.borderRadius = "0 0 10% 10%";

        // ele.children[0].style.transition =
        //   "all .8s cubic-bezier(0.86, 0, 0.07, 1)";
        // console.log(e.target.children[0]);
        // e.target.style.filter = " none";
        card.style.transform = "scale(1)";
        // card.style.clipPath = ` polygon(0% 0%, 100% 0%, 50% 100%)`;
        // clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)",
      });

      card.addEventListener("mouseleave", (e) => {
        const ele = e.target.children[0];
        // card.style.transition = "all 0.5s ease";
        // ele.children[0].style.background = "#ffffff";
        e.target.style.filter = "invert(1)";

        // ele.children[0].style.height = "68%";
        card.style.transform = `scale(.8)`;
        ele.children[0].style.borderRadius = "0 ";
        // card.style.clipPath = `none`;
      });
    });

    // threeImg.addEventListener("mouseenter", (e) => {
    //   threeImg.style.transition = "none";
    //   //   threeImg.style.clipPath = `polygon(0% 7%, 75% 59%, ${
    //   //     e.pageX / 15
    //   //   }px 97%, 0% 50%)`;
    //   //Popout
    // });
    //Animate Out
    // threeImg.addEventListener("mouseleave", (e) => {
    //   threeImg.style.transition = "all 0.5s ease";
    //   threeImg.style.transform = ` translateY(0rem) rotateY(0deg) rotateX(0deg) `;
    // });

    // iamText.addEventListener("mouseenter", (e) => {
    //   //Popout
    //   skills.forEach((skill) => {
    //     skill.style.transition = "1s ease";
    //     skill.style.fontSize = "large";
    //     // skill.style.background = "black";
    //   });
    // });

    // //Animate Out
    // iamText.addEventListener("mouseleave", (e) => {
    //   skills.forEach((skill) => {
    //     skill.style.fontSize = "2rem";
    //   });
    // });
  }, []);

  return (
    <>
      <Container fluid>
        <Row
          className="iam "
          style={{
            height: mobile ? "57vh" : "88vh",
          }}
        >
          <Col
          // style={{
          //   padding: !mobile && "9rem 0px 0px 0px",
          // }}
          >
            {" "}
            <div
              className="iamText observed"
              style={{
                position: "relative",
                // background: "rgb(15 9 1)",
                color: "white",
                transition: "width 0.5s ease,   opacity 1s ease ",
                opacity: offsetY >= 250 ? "1" : "0",
                left: !mobile && "0%",
                top: !mobile && " 1%",
                borderRadius: "5px",
                textAlign: "center",
                backdropFilter: "brightness(0.85)",
                height: mobile ? "96%" : "91%",
                width: mobile ? "100%" : offsetY >= 250 && "100%",
                // padding: "13rem 26rem",
                clipPath: !mobile && "polygon(50% 0%, 100% 100%, 0% 100%)",

                //   marginTop: "35%",
                //   zIndex: "1",
                //   scrollSnapAlign: "center",
                // zIndex: "9999999",
                //   position: "relative",
                //   pointerEvents: "none",
                // padding: "0rem 30rem",
                //   textAlign: "center",
                // left: "17%",
                // color: "rgb(0 0 0 )",
                //   color: "#12314c",
              }}
            >
              <h1
                style={{
                  borderBottom: "1px solid white",
                  // padding: "11%",
                  paddingTop: "15%",
                  paddingBottom: "7%",
                  fontSize: "3rem",
                  color: "black",
                  fontWeight: "800",
                  textShadow: "14px 20px #e3e2e2",
                }}
              >
                {" "}
                ABOUT{"  "}
              </h1>

              {/* <h3> STEVE AGYEMAN </h3> */}
              <p
                style={{
                  padding: mobile ? "2rem 5rem" : "0rem 30%",
                  transition: "all 1s ease",
                  background: offsetY >= 450 && " #770006",
                }}
              >
                I'm Steve Agyeman, a Manchester United fan and a{" "}
                <strong
                  style={{
                    transition: "all 1s ease",
                    fontSize: mobile ? ".9rem" : "1.2rem",
                    fontStyle: "italic",
                  }}
                  className="skill"
                >
                  Front-end developer{" "}
                </strong>
                based in Atlanta, GA. I'm skilled in{" "}
                <strong
                  style={{
                    fontStyle: "italic",

                    fontSize: mobile ? ".9rem" : "1.2rem",
                  }}
                  className="skill"
                >
                  JavaScript
                </strong>
                ,{" "}
                <strong
                  style={{
                    fontStyle: "italic",

                    fontSize: mobile ? ".9rem" : "1.2rem",
                  }}
                  className="skill"
                >
                  Node
                </strong>
                ,{" "}
                <strong
                  style={{
                    fontStyle: "italic",

                    fontSize: mobile ? ".9rem" : "1.2rem",
                  }}
                  className="skill"
                >
                  React
                </strong>
                ,{" "}
                <strong
                  style={{
                    fontStyle: "italic",

                    fontSize: mobile ? ".9rem" : "1.2rem",
                  }}
                  className="skill"
                >
                  Html
                </strong>
                ,{" "}
                <strong
                  style={{
                    fontStyle: "italic",

                    fontSize: mobile ? ".9rem" : "1.2rem",
                  }}
                  className="skill"
                >
                  Css
                </strong>
                ,{" "}
                <strong
                  style={{
                    fontStyle: "italic",

                    fontSize: mobile ? ".9rem" : "1.2rem",
                  }}
                  className="skill"
                >
                  Express
                </strong>{" "}
                and{" "}
                <strong
                  style={{
                    fontStyle: "italic",

                    fontSize: mobile ? ".9rem" : "1.2rem",
                  }}
                  className="skill"
                >
                  Restful APIs
                </strong>
                .
              </p>

              <p style={{}}>
                Check out some example{" "}
                <strong
                  style={{
                    fontStyle: "italic",

                    fontSize: mobile ? ".9rem" : "1.2rem",
                  }}
                  className="skill"
                >
                  apps
                </strong>{" "}
                and feel free to{" "}
                <strong
                  style={{
                    fontStyle: "italic",

                    fontSize: mobile ? ".9rem" : "1.2rem",
                  }}
                  className="skill"
                >
                  get in touch
                </strong>{" "}
                .
              </p>

              <Link
                to="/work"
                style={{
                  display: mobile && "none",
                  textDecoration: "none",
                }}
              >
                <Button
                  className="links b-3"
                  style={{
                    opacity: offsetY >= 500 ? "1" : "0",

                    transition: "opacity 1s ease 1s 600ms",
                  }}
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>

      <Container
        style={{
          background: mobile && `#0d0d0f`,
          // filter: "invert(1)",
          transform: mobile
            ? offsetY >= 590
              ? "translateY(1px)"
              : "translateY(300px)"
            : "none",
          transition: "all .5s ease",
          width: offsetY > 1000 ? "100vw" : "90vw",
        }}
        fluid
      >
        <Row
          className="justify-content-md-center  "
          // md={3}
          style={{
            // width: offsetY > 1000 ? "100vw" : "90vw",
            height: mobile ? "35vh " : "100vh",
            overflow: "hidden",
            position: "relative",
            margin: "auto",
            transition: "width 1s cubic-bezier(0.86, 0, 0.07, 1)",
            // backgroundColor: mobile && "white",
            padding: "10%",
          }}
        >
          <Col
            className="aboutCardWrapper "
            style={{
              textAlign: "center",
              // clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)",
              // background: `url(${img6}) center center/cover`,
            }}
          >
            <div
              className="aboutCard observed"
              style={{
                background: mobile
                  ? "white"
                  : `url(${img2}) center center/cover fixed`,
                height: mobile ? "80%" : "100%",
                width: "100%",
                color: "white",
                filter: !mobile && " invert(1)",
                // backdropFilter: "brightness(0.5)",
                transform: `scale(.8)`,
                // border: "1px solid",
                // clipPath: ` polygon(0% 0%, 100% 0%, 50% 100%)`,
                clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",

                // boxShadow: "black -4px 8px 2px inset",
              }}
            >
              <Link
                to="/work"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <h1
                  style={{
                    paddingTop: "29%",
                    color: "black",

                    fontSize: "3rem",
                    height: "30%",
                    // background: "black",
                    // background: "rgba(240, 248, 255, 0.41)",

                    fontWeight: "800",
                    textShadow: "14px 20px #e3e2e2",
                  }}
                >
                  APPS
                </h1>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
      <Container
        style={{
          display: mobile && "none",
          background: mobile
            ? `url(${img2}) center center/cover`
            : `url(${img2}) center center/cover fixed`,
          filter: "invert(1)",
          height: "40vh",
          // transform: mobile
          //   ? "none"
          //   : offsetY >= 1600
          //   ? "translateY(0px)"
          //   : "translateY(300px)",
          // width: offsetY > 1800 ? "101vw" : "1vw",
          transition: "transform .5s ease ",
          margin: "auto",
        }}
        fluid
      >
        <Row
        // style={{
        //   background: `url(${img2}) center center/cover fixed`,
        //   filter: "invert(1)",
        //   height: "100vh",
        //   width: offsetY > 1800 ? "101vw" : "1vw",
        //   transition: "width 1s cubic-bezier(0.86, 0, 0.07, 1)",
        //   margin: "auto",
        // }}
        ></Row>
      </Container>
    </>
  );
}
