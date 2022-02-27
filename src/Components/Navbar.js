import React from "react";
import { Link } from "react-router-dom";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
// import Move from "./Move";
// import { ScrollLinkButton } from "./ScrollLinkButton";
import * as Scroll from "react-scroll";

const scroll = Scroll.animateScroll;

scroll.scrollToTop();

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: "",
    };
  }

  componentDidMount() {
    // const value = window.innerWidth < 768;

    if (window.innerWidth <= 768) {
      this.setState({ mobile: true });
    } else {
      this.setState({ mobile: false });
    }
  }

  render() {
    const { navToggle } = this.props;

    // console.log(this.state.mobile);

    window.addEventListener("resize", this.props.handleNavBtnShow);

    return (
      <nav className="topnav">
        <div className="topnav-container">
          <Link
            to="/home"
            onClick={scroll.scrollToTop}
            className="topnav-logo nav-links"
            style={{ letterSpacing: "18px", fontWeight: "100" }}
          >
            {" "}
            {this.state.mobile ? (
              <i
                onClick={this.props.handleMobileMenuClose}
                className="fas fa-home "
                style={{
                  fontSize: "1.8rem",
                  fontWeight: "900",
                  color: "#12b54d",
                  textShadow: "none",
                }}
              ></i>
            ) : (
              this.props.greetings
            )}{" "}
          </Link>

          <div className="menu-icon" onClick={this.props.handleNavToggleClick}>
            <i className={navToggle ? "fas fa-times" : "fas fa-align-right"} />
          </div>

          <ul className={navToggle ? "nav-menu active" : "nav-menu"}>
            <li onClick={this.props.handleMobileMenuClose}>
              <Link
                to="/"
                className="nav-links"
                onClick={scroll.scrollToTop}

                // onClick={this.props.handleMobileMenuClose}
              >
                Home
              </Link>
            </li>
            <li onClick={this.props.handleMobileMenuClose}>
              <Link
                to="/contact"
                className="nav-links"
                // onClick={this.props.handleMobileMenuClose}
              >
                Contact
              </Link>
            </li>
            <li onClick={this.props.handleMobileMenuClose}>
              <a
                // className="social-icon-link"
                className="nav-links"
                href="https://github.com/agyemansteve"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                Projects
              </a>
              {/* <Link
                to="/projects"
               
                // onClick={this.props.handleMobileMenuClose}
              >
              
              </Link> */}
            </li>
            <li onClick={this.props.handleMobileMenuClose}>
              <Link
                to="/work"
                className="nav-links"
                // onClick={this.props.handleMobileMenuClose}
              >
                Apps
              </Link>
            </li>
            <li onClick={this.props.handleMobileMenuClose}>
              <a
                // className="social-icon-link"
                href="https://github.com/agyemansteve"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
              >
                <OverlayTrigger
                  placement="right"
                  overlay={
                    <Tooltip
                      style={{ color: "white", paddingLeft: "1rem" }}
                      id="tooltip-2"
                    >
                      GIT HUB
                    </Tooltip>
                  }
                >
                  {({ ref, ...triggerHandler }) => (
                    <i
                      {...triggerHandler}
                      ref={ref}
                      className="fab fa-github social-icon-link"
                    ></i>
                  )}
                </OverlayTrigger>
              </a>
            </li>
            <li onClick={this.props.handleMobileMenuClose}>
              {" "}
              <a
                // className="social-icon-link"
                href="https://www.instagram.com/nkzdev"
                target="__blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <OverlayTrigger
                  placement="right"
                  overlay={
                    <Tooltip
                      style={{ color: "white", paddingLeft: "1rem" }}
                      id="tooltip-3"
                    >
                      INSTAGRAM
                    </Tooltip>
                  }
                >
                  {({ ref, ...triggerHandler }) => (
                    <i
                      {...triggerHandler}
                      ref={ref}
                      className="fab fa-instagram social-icon-link"
                    ></i>
                  )}
                </OverlayTrigger>
              </a>{" "}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
