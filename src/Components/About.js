import React, { useEffect, useState } from "react";

import Row from "react-bootstrap/Row";
import ThreeImg from "./ThreeImg";

import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import img1 from "../images/img1.jpg";

import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";

import img5 from "../images/img5.jpg";
import img6 from "../images/img6.jpg";
import img7 from "../images/img7.jpg";
import ContactForm from "./ContactForm";
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
    const mainVideo = document.querySelector(".mainVideo");
    const aboutCards = document.querySelectorAll(".aboutCard");
    const IamText = document.querySelector(".iamText");

    IamText.addEventListener("mouseenter", (e) => {
      IamText.style.transition = `all 0.5s ease`;
      IamText.style.filter = " none";
      // IamText.style.transform = `scale(1.1)`;
    });

    IamText.addEventListener("mouseleave", (e) => {
      IamText.style.filter = "invert(1) ";

      // mainVideo.style.transform = `scale(1)`;
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

        card.style.transition = "all 0.5s cubic-bezier(0.86, 0, 0.07, 1)";
        ele.children[0].style.height = "10%";
        ele.children[0].style.background = "#ffffff00";
        ele.children[0].style.borderRadius = "0 0 10% 10%";

        ele.children[0].style.transition =
          "all .8s cubic-bezier(0.86, 0, 0.07, 1)";
        // console.log(e.target.children[0]);
        e.target.style.filter = "none";
        card.style.transform = "scale(.7)";
        // card.style.clipPath = ` polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)`;
      });

      card.addEventListener("mouseleave", (e) => {
        const ele = e.target.children[0];
        // card.style.transition = "all 0.5s ease";
        ele.children[0].style.background = "#ffffff";

        e.target.style.filter = " grayscale(1)";
        ele.children[0].style.height = "68%";
        card.style.transform = `scale(1)`;
        ele.children[0].style.borderRadius = "0 ";
        card.style.clipPath = `none`;
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
      <Container>
        <Row
          className="iam"
          style={{
            height: "88vh",
          }}
        >
          <Col
            style={{
              padding: !mobile && "9rem 0px 0px 0px",
            }}
          >
            {" "}
            <div
              className="iamText observed"
              style={{
                position: "relative",
                background: "rgb(15 9 1)",
                color: "white",
                transition:
                  "width 0.5s cubic-bezier(0.86, 0, 0.07, 1) 700ms,   opacity 1s ease ",
                opacity: offsetY >= 250 ? "1" : "0",
                left: !mobile && "0%",
                top: !mobile && " 1%",
                borderRadius: "5px",
                textAlign: "center",
                width: mobile ? "100%" : offsetY >= 250 && "100%",
                padding: "5rem 13rem",

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
                }}
              >
                {" "}
                About me{"  "}
              </h1>

              {/* <h3> STEVE AGYEMAN </h3> */}
              <p>
                I'm Steve Agyeman, a Manchester United fan and a{" "}
                <strong
                  style={{
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

      <Container fluid>
        <Row
          className="justify-content-md-center"
          md={3}
          style={{
            height: mobile ? "35vh " : "100vh",
            overflow: "hidden",
            position: "relative",
            backgroundColor: "white",
            padding: "10%",
          }}
        >
          <Col
            style={{
              textAlign: "center",
              // background: `url(${img4}) center center/cover`,
            }}
          >
            <div
              className="aboutCard"
              style={{
                background: `url(${img1}) center center/cover`,
                height: mobile ? "80%" : "100%",
                width: "100%",
                filter: !mobile && " grayscale(1)",
                border: "1px solid",

                // boxShadow: "inset 6px 8px 2px black",
              }}
            >
              <Link
                to="/projects"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <h1
                  style={{
                    paddingTop: "50%",
                    height: "68%",
                    background: "white",
                    // background: "rgba(240, 248, 255, 0.41)",
                    fontWeight: "900",
                    // backdropFilter: "grayscale(1)",
                  }}
                >
                  PROJECTS
                </h1>
              </Link>
            </div>
          </Col>
          {/* <Col
         
            style={{
             

              textAlign: "center",
            }}
          >
            <div
              className="aboutCard"
              style={{
                background: `url(${img3}) center center/cover`,
                height: "100%",
                width: "100%",
                filter: " grayscale(1)",

             
              }}
            >
              {" "}
              <Link
                to="/contact"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <h1
                  style={{
                    paddingTop: "50%",

                    height: "68%",
                    background: "white",
                   
                    fontWeight: "900",
                    
                  }}
                >
                  CONTACT
                </h1>
              </Link>
            </div>{" "}
          </Col>
        
        
         */}

          <Col
            // className="aboutCard"
            style={{
              textAlign: "center",
              // background: `url(${img6}) center center/cover`,
            }}
          >
            <div
              className="aboutCard"
              style={{
                background: `url(${img3}) center center/cover`,
                height: mobile ? "80%" : "100%",
                width: "100%",
                filter: !mobile && " grayscale(1)",
                border: "1px solid",

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
                    paddingTop: "50%",

                    height: "68%",
                    background: "white",
                    // background: "rgba(240, 248, 255, 0.41)",
                    fontWeight: "900",
                    // backdropFilter: " grayscale(1)",
                  }}
                >
                  APPS
                </h1>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
