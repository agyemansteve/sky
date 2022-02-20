import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Move from "./Move";
// import SurpriseOpens from "./SurpriseOpen";

export default function PortfolioIntro(props) {
  return (
    <div className="">
      <Container>
        <Row>
          <Col>
            <div style={{ height: "89vh" }} className="port-container">
              <div
                style={{ marginTop: "100px", textAlign: "center" }}
                className="port-intro-text"
              >
                <h5 className="port-intro-text-header">
                  Hi,{" "}
                  <span className="" style={{ color: "red" }}>
                    {props.greetings}.{" "}
                  </span>
                </h5>
                <p
                  style={{
                    paddingTop: "58px",
                    fontSize: "1rem",
                    marginLeft: "30%",
                    marginRight: "30%",
                    lineHeight: "32px",
                    fontWeight: "500",
                    // textShadow: "-3px -1px black",
                  }}
                >
                  My name is Steve Agyeman, a Software Engineer based in Atlanta
                  GA. My tech stack includes :{" "}
                </p>
              </div>
              <div
                style={{
                  transform: `translate3d(38%, -190.273px,0px) scale(0.7)`,
                }}
                id="center-page2"
              >
                <Move>
                  <SurpriseOpens />
                </Move>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
