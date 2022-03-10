import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
// import ListGroup from "react-bootstrap/ListGroup";
import Stack from "react-bootstrap/Stack";

import * as Scroll from "react-scroll";
import { Link } from "react-router-dom";
const scroll = Scroll.animateScroll;

scroll.scrollToTop();

const Footer = () => {
  const [mobile, setMobile] = useState();

  useEffect(() => {
    setMobile(window.innerWidth <= 768);
  }, []);
  return (
    <Container
      fluid
      style={{
        height: mobile ? "100vh" : "65vh",
        background: `#000000`,
        color: "white",
      }}
      // className="footer"
    >
      <Row
        style={{
          textAlign: "center",
          alignItems: "center",
          height: "100%",

          paddingTop: mobile ? "10%" : "0%",
          // color: "white",
        }}
      >
        <Col sm>
          <Stack gap={4}>
            <div
              style={{
                fontSize: ".9rem",
                // fontWeight: "900",
                // fontFamily: `"Nothing You Could Do", cursive`,
                background: mobile && `transparent !important`,
              }}
              className={"stack-item observed"}
            >
              SITE
              <strong
                style={{
                  color: "#12b54d",
                }}
              >
                MAP
              </strong>
            </div>
            <div
              style={{
                fontSize: mobile ? "1rem" : ".7rem",
                padding: mobile && "none",
              }}
              className={"stack-item observed"}
            >
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  fontSize: ".7rem",
                  textShadow: "1px 1px 0px white",
                }}
                className="nav-links"
                // onClick={this.props.handleMobileMenuClose}
              >
                HOME
              </Link>
            </div>
            <div
              style={{
                fontSize: mobile ? "1rem" : ".7rem",
                padding: mobile && "none",
              }}
              className={"stack-item observed"}
            >
              <Link
                to="/work"
                style={{
                  textDecoration: "none",
                  fontSize: ".7rem",
                  textShadow: "1px 1px 0px white",
                }}
                className="nav-links"
                // onClick={this.props.handleMobileMenuClose}
              >
                WORK SAMPLES
              </Link>
            </div>
            <div
              style={{
                fontSize: mobile ? "1rem" : ".7rem",
                padding: mobile && "none",
              }}
              className={"stack-item observed"}
            >
              <Link
                to="/contact"
                style={{
                  textDecoration: "none",
                  fontSize: ".7rem",
                  textShadow: "1px 1px 0px white",
                }}
                className="nav-links"
                // onClick={this.props.handleMobileMenuClose}
              >
                CONTACT ME
              </Link>
            </div>
          </Stack>
          <br />
        </Col>

        {/* <hr /> */}
        <Col sm>
          <Stack gap={3}>
            <div className="">
              {" "}
              {/* <Link
              to="/home"
             
            > */}
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip
                    // style={{ color: "white", paddingTop: "1rem" }}
                    id="tooltip-3"
                  >
                    SCROLL TO TOP
                  </Tooltip>
                }
              >
                {({ ref, ...triggerHandler }) => (
                  <i
                    {...triggerHandler}
                    ref={ref}
                    className="fas fa-arrow-circle-up"
                    onClick={scroll.scrollToTop}
                    style={{
                      // color: "black",
                      fontSize: "23px",
                    }}
                  ></i>
                )}
              </OverlayTrigger>
              {/* </Link> */}
            </div>
            <div className="">
              {/* <i
                className="fas "
                style={{
                  fontSize: mobile ? "1rem" : ".9rem",
                  fontWeight: "900",
                  // fontFamily: `"Nothing You Could Do", cursive`,
                }}
              >
                {" "} */}
              S.AGYE<strong style={{ color: "#12b54d" }}>MEN</strong>
              {/* </i> */}
            </div>
            <div
              style={{
                fontSize: mobile ? "1rem" : ".7rem",
              }}
            >
              © 2021 NKZDEV
            </div>

            <div
              style={{
                fontSize: "15px",
                // fontFamily: `"Nothing You Could Do", cursive`,
              }}
            >
              Images provided by
              <a
                style={{ color: "#12b54d" }}
                // className="nav-links"
                href="https://www.pexels.com/"
                target="_blank"
                rel="noreferrer"
              >
                www.pexels.com & wwww.rawpixel.com
              </a>
            </div>
          </Stack>
        </Col>
        {/* <hr /> */}

        <Col sm>
          <Stack
            // tyle={{ color: "#ffff" }}
            gap={3}
          >
            <div
              style={{
                fontSize: ".9rem",
                // fontWeight: "900",
                // fontFamily: `"Nothing You Could Do", cursive`,
              }}
              className={"stack-item observed"}
            >
              CONTACT
              <strong style={{ color: "#12b54d" }}>INFO</strong>{" "}
            </div>
            <div
              style={{
                fontSize: mobile ? "1rem" : ".7rem",
              }}
              className={"tack-item"}
            >
              Steve Agyeman
            </div>
            <div
              style={{
                fontSize: mobile ? "1rem" : ".7rem",
              }}
              className={"tack-item"}
            >
              <a
                className="nav-links"
                style={{ fontSize: ".7rem", textShadow: "1px 1px 0px white" }}
                href="mailto:nkzdev233@gmail.com"
              >
                nkzdev233@gmail.com
              </a>
            </div>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
