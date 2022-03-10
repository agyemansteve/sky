/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
// import { useTransition, animated, useSpringRef } from "@react-spring/web";
import Welcome from "./Welcome";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import WelcomeYtube from "./WelcomeYtube";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
// import Youtube from "./Youtube";
// import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import img1 from "../images/img2.jpg";
// import { ScrollLinkButton } from "./ScrollLinkButton";
// import { Link } from "react-router-dom";

// import Youtube from "./Youtube";

export default function Transition(props) {
  const [offsetY, setOffsetY] = useState(0);
  const [mobile, setMobile] = useState();
  const handleScroll = () => setOffsetY(window.pageYOffset);

  const bg1 = `https://images.pexels.com/photos/1224158/pexels-photo-1224158.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200`;

  const containeBg = mobile
    ? `url(${bg1}) center center/cover`
    : `url(${bg1})fixed center center/cover`;
  const topColsBg = `transparent`;
  const bottomColsBg = `white`;

  // top cols background

  // const bg5 = `https://images.pexels.com/photos/1880651/pexels-photo-1880651.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`;

  // console.log(offsetY);
  // let textsize = offsetY / 12;

  // const ClickHearder = (props) => {
  //   return (
  //     <>
  //       <h1 style={{ marginTop: "10rem", fontFamily: "Nothing You Could Do" }}>
  //         {props.title}
  //       </h1>

  //       <div
  //         style={{
  //           width: "100px",
  //           marginLeft: "45%",
  //         }}
  //         className="links b-3"
  //       >
  //         <ScrollLinkButton to={props.to}>{props.btnChild}</ScrollLinkButton>
  //       </div>
  //     </>
  //   );
  // };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setMobile(window.innerWidth <= 768);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const SearchColor = () => {
    return (
      <>
        Image search with Pexel's RESTful JSON API{" "}
        <strong
          style={{
            color: "#afadad",
            fontStyle: "italic",
            fontSize: ".7rem",
            // fontFamily: "Nothing You Could Do",
          }}
        >
          {" "}
          <br />
          (Try seaching for your favorite color, city, place or anything...)
        </strong>
      </>
    );
  };

  const AfterSearchColor = () => {
    return (
      <>
        Select an image to change main background{" "}
        <strong
          style={{
            // color: "#770006",
            fontStyle: "italic",
            fontSize: ".7rem",
            // fontFamily: "Nothing You Could Do",
          }}
        >
          {" "}
          <br />
          (drag slider right for more images...)
        </strong>
      </>
    );
  };

  return (
    <Container
      fluid
      className="welcome2"
      style={{
        height: mobile ? "341vh" : "401vh",
        backgroundColor: "#fff",

        // background: `${containeBg}`,
      }}
    >
      {/* <Opener
        offsetY={offsetY}
        mobile={mobile}
        first={["Welcome"]}
        second={["More Projects Coming Soon!"]}
        third={["Scroll Down"]}
      /> */}

      {/* TOP ROW */}

      <Row
        // className="observed"
        id="app"
        style={{
          height: mobile ? "100vh" : "125vh",
          marginBottom: "-1px",
          // opacity: !mobile && (offsetY >= 217 ? "1" : `0`),
          transition: " all 1s ease",
          background: mobile
            ? `no-repeat  url( https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm309-adj-05.jpg?w=1300&dpr=1&fit=default&crop=default&q=80&vib=3&con=3&usm=15&bg=F4F4F3&auto=format&ixlib=js-2.2.1&s=146e6c3224a2fe471b3be1066ff82bfe) center center/cover`
            : `no-repeat  url( https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm309-adj-05.jpg?w=1300&dpr=1&fit=default&crop=default&q=80&vib=3&con=3&usm=15&bg=F4F4F3&auto=format&ixlib=js-2.2.1&s=146e6c3224a2fe471b3be1066ff82bfe)fixed center center/cover`,
        }}
      >
        <Col
          className="welcome"
          style={{
            // borderRadius: mobile
            //   ? "0 50% 50% 0%"
            //   : ` ${offsetY / 35}% ${offsetY / 10 / 3}% `,
            backgroundColor: "#000",
            margin: "1px",
            background: mobile
              ? `no-repeat  url( ${bg1})center center/cover`
              : `no-repeat  url( ${bg1})fixed center center/cover`,
            // background: `#000`,
          }}
        ></Col>
        <Col
          style={{
            width: "50vw",
            textAlign: "center",
            // boxShadow: "-10px 11px 20px 0px",
          }}
        >
          <Welcome
            handleSideBarClick={props.handleSideBarClick}
            authorName={props.authorName}
            mobile={mobile}
            offsetY={offsetY}
            // authorName2={props.authorName2}
            pexelQuery={props.pexelQuery}
            photos={props.photos}
            handleSearchSubmit={props.handleSearchSubmit}
            handleSearchChange={props.handleSearchChange}
            // show={props.show}
          />

          <p
            style={{
              textAlign: "center",
              padding: mobile ? "5%" : "1ren 8rem",

              fontSize: mobile ? "1rem" : "1.2rem",
            }}
          >
            {props.authorName ? <AfterSearchColor /> : <SearchColor />}
          </p>
        </Col>
      </Row>

      {/* LEFT SIDE BAR */}

      <Row
        className="welcome2 topCol"
        style={{
          height: mobile ? "20vh" : "165vh",
          transition: "all 1s ease",
          marginBottom: "-68px",

          // transform: `translateY(${offsetY * -0.1}px)`,
          textAlign: "center",
          // marginTop: "5rem",

          background: mobile
            ? `rgb(252 251 254)`
            : `
            no-repeat  url( https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm309-adj-05.jpg?w=1300&dpr=1&fit=default&crop=default&q=80&vib=3&con=3&usm=15&bg=F4F4F3&auto=format&ixlib=js-2.2.1&s=146e6c3224a2fe471b3be1066ff82bfe)fixed center center/cover
          `,
        }}
      >
        <Col
          style={{ textAlign: "center ", display: mobile ? "none" : "block" }}
        >
          <div
            className="topCol welcome2"
            style={{
              // background: "#770006",
              height: mobile ? "360px" : "40%",
              // marginTop: mobile && "9rem",
              margin: !mobile && `20rem 2rem`,
              boxShadow: "7px 11px 14px #00000073",
              background: `
              
              ${containeBg}
             `,
              filter: "hue-rotate(158deg)",

              transform: `translateX(${offsetY / -70}%)`,
            }}
          >
            {" "}
          </div>
        </Col>
      </Row>

      <Row
        // className="top"
        className="welcome4 topCol"
        id="youtubeApi"
        style={{
          height: mobile ? "230vh" : "120vh",
          marginBottom: "-1px",

          // transform: `translateY(${offsetY * -0.1}px)`,
          background: mobile
            ? `no-repeat  url(${bg1}) center right/400%`
            : `
            no-repeat  url(${bg1})fixed center center/cover
          `,
          // borderTop: "1px solid",
          // background: `no-repeat  url( https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm309-adj-05.jpg?w=1300&dpr=1&fit=default&crop=default&q=80&vib=3&con=3&usm=15&bg=F4F4F3&auto=format&ixlib=js-2.2.1&s=146e6c3224a2fe471b3be1066ff82bfe)fixed center center/cover`,
        }}
      >
        <WelcomeYtube
          handleSideBarClick={props.ytHandleSideBarClick}
          // authorName={props.authorName}
          offsetY={offsetY}
          mobile={mobile}
          videos={props.videos}
          youtubeId={props.youtubeId}
          youtubeChannel={props.youtubeChannel}
          youtubeTitle={props.youtubeTitle}
          youtubeQ={props.youtubeQ}
          youtubeSrc={props.youtubeSrc}
          // photos={props.photos}
          handleYTSearchSubmit={props.handleYTSearchSubmit}
          handleYTSearchChange={props.handleYTSearchChange}
          // show={props.show}
        />
      </Row>
      {/* <Row style={{ textAlign: "center ", display: mobile ? "block" : "none" }}>
        <Youtube src={props.youtubeSrc} />
      </Row> */}
      <Row
        style={{
          display: mobile ? "none" : "block",
          height: mobile ? "20vh" : "1vh",
          marginBottom: "-1px",

          transform: `translateY(${offsetY / -150}%)`,

          background: mobile
            ? `no-repeat  url( https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm309-adj-05.jpg?w=1300&dpr=1&fit=default&crop=default&q=80&vib=3&con=3&usm=15&bg=F4F4F3&auto=format&ixlib=js-2.2.1&s=146e6c3224a2fe471b3be1066ff82bfe)center center/cover`
            : `no-repeat  url( https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm309-adj-05.jpg?w=1300&dpr=1&fit=default&crop=default&q=80&vib=3&con=3&usm=15&bg=F4F4F3&auto=format&ixlib=js-2.2.1&s=146e6c3224a2fe471b3be1066ff82bfe)fixed center center/cover`,
        }}
      >
        {" "}
      </Row>
    </Container>
  );
}
