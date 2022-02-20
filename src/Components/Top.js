import React from "react";
import intro from "../videos/intro.mp4";
import NameCard from "./NameCard";

import PortfolioIntro from "./PortfolioIntro";
import Opener from "./Opener";
class Top extends React.Component {
  render() {
    const page1 = (
      <div className="page1">
        <div>
          {/* <h1 className="top-text" onChange={this.props.onChange}>
            {this.props.greetings}
          </h1> */}

          <Opener />
        </div>
        {/* <div className="top-text-still"></div> */}

        <NameCard>
          Site created by{" "}
          <a
            href="https://www.w3schools.com"
            // ////////////////////// FIXXXXXXXXX

            rel="noreferrer"
            target="_blank"
          >
            {" "}
            NKZDEV
            <i className={"fas fa-globe-africa"} />
          </a>{" "}
        </NameCard>
      </div>
    );

    const page2 = (
      <
        // className="introTop"
      >
        <PortfolioIntro greetings={this.props.greetings} />
      </>
    );

    return (
      <div className="top">
        <video className="introVid" autoPlay loop muted>
          <source src={intro} type="video/mp4" />
        </video>

        {
          this.props.show ? page1 : page2
          // <Home />
        }
      </div>
    );
  }
}

export default Top;
