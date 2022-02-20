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

export default function IAM() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  //   const { offsetY } = props;
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // useEffect(() => {
  //   //Movement Animation to happen
  //   // const iamText = document.querySelector(".iamText");
  //   const threeImg = document.querySelector(".threeImg");
  //   const skills = document.querySelectorAll(".skill");
  //   const iamText = document.querySelector(".iamText");

  //   threeImg.addEventListener("mousemove", (e) => {
  //     let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
  //     let yAxis = (window.innerHeight / 2 - e.pageY) / 50;
  //     threeImg.style.transform = `translateY(0rem) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  //   });

  //   threeImg.addEventListener("mouseenter", (e) => {
  //     threeImg.style.transition = "none";
  //     //   threeImg.style.clipPath = `polygon(0% 7%, 75% 59%, ${
  //     //     e.pageX / 15
  //     //   }px 97%, 0% 50%)`;
  //     //Popout
  //   });
  //   //Animate Out
  //   threeImg.addEventListener("mouseleave", (e) => {
  //     threeImg.style.transition = "all 0.5s ease";
  //     threeImg.style.transform = ` translateY(0rem) rotateY(0deg) rotateX(0deg) `;
  //   });

  //   iamText.addEventListener("mouseenter", (e) => {
  //     //Popout
  //     skills.forEach((skill) => {
  //       skill.style.transition = "1s ease";
  //       skill.style.fontSize = "large";
  //       // skill.style.background = "black";
  //     });
  //   });

  //   //Animate Out
  //   iamText.addEventListener("mouseleave", (e) => {
  //     skills.forEach((skill) => {
  //       skill.style.fontSize = "2rem";
  //     });
  //   });
  // }, []);

  return (
    <div
      style={{
        transition: ` all 1s ease `,
        // height: "113vh",
        height: "520vh",

        //   background: offsetY >= 600 && "#ffff",
      }}
    >
      <Row
        className="iam"
        style={{
          overFlow: "hidden",
          margin: "auto",
          height: "100%",
          width: offsetY >= 150 ? "100vw" : "60%",
          transition: "all 500ms ease ",
          scrollSnapType: "y mandatory",
          backgroundImage:
            " radial-gradient(#f5f5f7 2px, transparent 2px), radial-gradient(#f5f5f7 2px, transparent 2px)",
          backgroundSize: "32px 32px",
          backgroundPosition: "0 0, 16px 16px",
          backgroundColor: offsetY >= 150 ? "#ffffff" : "#ffffff00",
          // transition: "all 1s ease ",
          // background:
          //   `linear-gradient(0deg, white,white, transparent)`,
        }}
      >
        {" "}
        <Col
          style={{
            // background: offsetY >= 100 && `rgb(0 0 0)`,
            height: "100vh",
            overFlow: "hidden",
            scrollSnapAlign: "start",
          }}
          md={{ span: 6, offset: 3 }}
        >
          <div
            className="iamText"
            style={{
              marginTop: "35%",
              zIndex: "1",
              scrollSnapAlign: "center",
              // zIndex: "9999999",
              position: "relative",
              //   pointerEvents: "none",
              // padding: "0rem 30rem",
              textAlign: "center",
              // left: "17%",

              // color: "rgb(0 0 0 )",
              color: "#12314c",
            }}
          >
            {/* <h1
              style={{
                width: "fit-content",
                position: "relative",
                bottom: "-467px",
                left: "-79%",
                color: "#0000008a",
                fontFamily: "'Libre Barcode 39'",
                fontSize: "8rem",
                fontWeight: "100",
                transform: "rotate(90deg)",

                transition: "all 1s ease .5s",

                opacity: offsetY >= 700 ? "1" : "0",

                textShadow: "14px 20px #e3e2e2",
              }}
            >
              {" "}
              About{"  "}
            </h1> */}

            <h1
              style={{
                fontSize: "1.5rem",
                fontWeight: "400",
                // marginBottom: "2rem",
                // borderBottom: "1px solid",
                // paddingBottom: "1rem",

                transition: "all 1s ease ",

                opacity: offsetY >= 680 ? "1" : "0",

                // textShadow: "14px 20px #e3e2e2",
              }}
            >
              {" "}
              WELCOME, I'M {"  "}
            </h1>

            <h3
              style={{
                fontSize: "4.6rem",
                // color: "rgb(208 206 202)",
                transition: "all 1s ease 200ms",
                fontWeight: offsetY >= 690 ? "400" : "100",
                fontVariantCaps: "all-small-caps",
                // lineHeight: "100px",
                color: "#12314c",
                // transition:"all 2s ease",
                // padding: "2.5rem 1rem",
                // background: offsetY >= 500 && "#000",
                opacity: offsetY >= 680 ? "1" : "0",
              }}
            >
              {" "}
              STEVE AGYEMAN{" "}
            </h3>
            <p
              style={{
                // color: "#4e3413",
                marginTop: "125%",
                fontSize: "1.9rem",
                letterSpacing: "5px",
                lineHeight: "34px",
                transition: "all 1s ease ",

                opacity: offsetY >= 1000 ? "1" : "0",
              }}
            >
              a Manchester United fan and a{" "}
              <strong
                style={{
                  // color: "#12314c",
                  color: "rgb(18, 49, 76)",
                  fontSize: "xxx-Large",
                  // fontSize: offsetY >= 650 && "xx-Large",
                  // background: "black",
                  padding: ".5rem 1rem",
                }}
                className="skill"
              >
                Front-end developer
              </strong>
              based in Atlanta, GA.
            </p>
          </div>
        </Col>
        <Col
          // md={{ span: 6, offset: 3 }}
          style={{
            height: "100vh",
            scrollSnapAlign: "start",

            // background: offsetY >= 990 && "#000",
            // transition: "2s all ease",
            // background: offsetY >= 100 && `rgb(0 0 0)`,
          }}
        >
          <div
            // className=" pageFade"
            style={{
              position: "relative",
              opacity: offsetY >= 1490 ? "1" : "0",
              margin: "auto",
              width:
                // offsetY >= 1600 ?
                "100vw",
              // : "90vw"
              // clipPath: `url(#svgPath)`,
              // width: "100vw",
              transition: "opacity .5s ease-in, width .5s ease",
            }}
          >
            <svg
              style={{
                display: "inline-flex",
              }}
              height="100%"
              width="100%"
            >
              <defs>
                <clipPath id="svgPath">
                  <rect
                    x="0"
                    y="0"
                    stroke="#000000"
                    strokeMiterlimit="10"
                    width="208"
                    height="500"
                  />
                  <rect
                    x="290.5"
                    y="45.5"
                    stroke="#000000"
                    strokeMiterlimit="10"
                    width="100"
                    height="455"
                  />
                  <rect
                    x="592.5"
                    y="13.5"
                    stroke="#000000"
                    strokeMiterlimit="10"
                    width="108"
                    height="484"
                  />
                  <rect
                    x="460"
                    y="84.5"
                    stroke="#000000"
                    strokeMiterlimit="10"
                    width="90"
                    height="416"
                  />
                  <rect
                    x="749.5"
                    y="57.5"
                    stroke="#000000"
                    strokeMiterlimit="10"
                    width="208"
                    height="447"
                  />
                  <rect
                    x="1034.5"
                    y="57.5"
                    stroke="#000000"
                    strokeMiterlimit="10"
                    width="150"
                    height="446"
                  />
                  <rect
                    x="1244.5"
                    y="33.5"
                    stroke="#000000"
                    strokeMiterlimit="10"
                    width="108"
                    height="471"
                  />
                  <rect
                    x="1410.5"
                    y="42.5"
                    stroke="#000000"
                    strokeMiterlimit="10"
                    width="69"
                    height="462"
                  />
                  <rect
                    x="1510"
                    y="0"
                    stroke="#000000"
                    strokeMiterlimit="10"
                    width="208"
                    height="500"
                  />

                  {/* <circle className="cls-2" cx="447.84" cy="447.85" r="445" /> */}
                </clipPath>
              </defs>
            </svg>
          </div>
        </Col>
        <Col
          style={{
            height: "100vh",
            scrollSnapAlign: "start",

            // background: offsetY >= 100 && `rgb(0 0 0)`,

            overFlow: "hidden",
          }}
          md={{ span: 6, offset: 3 }}
        >
          <div
            // className="iamText"
            style={{
              marginTop: offsetY >= 1900 ? "-180%" : "0",
              // clipPath:
              //   "polygon(50% 0%, 100% 0%, 100% 73.8%, 50.6% 100%, 50.9% 100%, 0.2% 76%, 0% 0%)",
              // zIndex: "9999999",
              // height: "60vh",
              padding: "2rem",
              borderRadius: "5px",
              // backgroundImage:
              //   " radial-gradient(#f5f5f7 2px, transparent 2px), radial-gradient(#f5f5f7 2px, transparent 2px)",
              // backgroundSize: "32px 32px",
              // backgroundPosition: "0 0, 16px 16px",
              // backgroundColor: "rgb(241 241 241)",
              // width: "100vw",
              transition: "margin 1.5s ease ",
              position: "relative",
              //   pointerEvents: "none",
              // padding: "4rem 28rem 7rem 9rem",
              // backgroundImage:
              //   " radial-gradient(#f5f5f7 2px, transparent 2px), radial-gradient(#f5f5f7 2px, transparent 2px)",
              // backgroundSize: "32px 32px",
              // backgroundPosition: "0 0, 16px 16px",
              // backgroundColor: "rgb(233 233 233 )",
              textAlign: "center",
              // left: "17%",

              color: "#12314c",
            }}
          >
            <p
              className="threeImg"
              style={{
                // color: "#4e3413",
                fontSize: "1.9rem",
                letterSpacing: "5px",
                // fontWeight: "100",
                lineHeight: "34px",
                padding: "3rem 6rem",
                transition: "all 2s ease",

                opacity: offsetY >= 1800 ? "1" : "0",
              }}
            >
              I'm skilled in{" "}
              <strong
                style={{
                  color: "rgb(18, 49, 76)",
                  fontSize: offsetY >= 800 && "xxx-Large",
                }}
                className="skill"
              >
                JavaScript
              </strong>
              ,{" "}
              <strong
                style={{
                  color: "rgb(18, 49, 76)",
                  fontSize: offsetY >= 800 && "xxx-Large",
                }}
                className="skill"
              >
                Node
              </strong>
              ,{" "}
              <strong
                style={{
                  color: "rgb(18, 49, 76)",
                  fontSize: offsetY >= 800 && "xxx-Large",
                }}
                className="skill"
              >
                React
              </strong>
              ,{" "}
              <strong
                style={{
                  color: "rgb(18, 49, 76)",
                  fontSize: offsetY >= 800 && "xxx-Large",
                }}
                className="skill"
              >
                Html
              </strong>
              ,{" "}
              <strong
                style={{
                  color: "rgb(18, 49, 76)",
                  fontSize: offsetY >= 800 && "xxx-Large",
                }}
                className="skill"
              >
                Css
              </strong>
              ,{" "}
              <strong
                style={{
                  color: "rgb(18, 49, 76)",
                  fontSize: offsetY >= 800 && "xxx-Large",
                }}
                className="skill"
              >
                Express
              </strong>{" "}
              and{" "}
              <strong
                style={{
                  color: "rgb(18, 49, 76)",
                  fontSize: offsetY >= 800 && "xxx-Large",
                }}
                className="skill"
              >
                Restful APIs
              </strong>
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

          <div
            style={{
              // background: "#e2e5ea",
              // backgroundImage:
              //   " radial-gradient(#f5f5f7 2px, transparent 2px), radial-gradient(#f5f5f7 2px, transparent 2px)",
              // backgroundSize: "32px 32px",
              // clipPath:
              //   " polygon(48.6% 22.8%, 100% 0%, 100% 60%, 49.9% 100%, 49.8% 100%, 0% 60%, 0% 0%)",

              // backgroundPosition: "0 0, 16px 16px",
              backgroundColor: "rgb(233 233 233 )",
              color: "#12314c",
              fontSize: "1.9rem",
              letterSpacing: "5px",
              lineHeight: "34px",
              transition: "all 1.5s ease",
              padding: "15rem 6rem",
              height: offsetY >= 2670 ? "140%" : "10%",

              // opacity: offsetY >= 3460 ? "1" : "0",
            }}
          >
            <p
              style={{
                marginTop: offsetY >= 2671 ? "50%" : "-10%",
                transition: "opacity 1.5s ease, margin 2s ease 400ms",
                paddin: "0rem 6rem",
                opacity: offsetY >= 2388 ? "1" : "0",
              }}
            >
              Check out some example{" "}
              <strong
                style={{
                  color: "rgb(18, 49, 76)",
                  fontSize: offsetY >= 800 && "xxx-Large",
                }}
                className="skill"
              >
                apps
              </strong>{" "}
              and feel free to{" "}
              <strong
                style={{
                  color: "rgb(18, 49, 76)",
                  fontSize: offsetY >= 800 && "xxx-Large",
                }}
                className="skill"
              >
                get in touch
              </strong>{" "}
              .
            </p>
          </div>

          {/* usse for link  */}

          {/* <ScrollLinkButton to="app">
            <span
              style={{
                textDecoration: "none",
                color: "#000",
                background: "transparent",
                fontFamily: `"Nothing You Could Do"`,

                border: "none",
                borderBottom: " 1px solid",
              }}
              // className="links b-3"
              // variant="outline-danger"
            >
              {" "}
              apps{" "}
            </span>
          </ScrollLinkButton> */}

          {/* <a
            // className="links b-3"
            target="_blank"
            href="mailto:nkzdev233@gmail.com"
            // fontFamily: `"Nothing You Could Do"`,
            style={{
              color: "#000",

              fontFamily: `"Nothing You Could Do"`,
            }}
            rel="noreferrer"
          >
            get in touch
          </a> */}

          {/* <Link
            to="/work"
            style={{
              textDecoration: "none",
              // display: "inline",
              // opacity: ".5",
              position: "relative",
              zIndex: "9999",
              // top: "50%",
              left: "83%",
            }}
          >
            <Button
              className="links b-3"
              style={{
                opacity: offsetY >= 600 ? "1" : "0",

                transition: "opacity 1s ease 1s 600ms",
              }}
            >
              Learn More
            </Button>
          </Link> */}
        </Col>
      </Row>
    </div>
  );
}
