import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Stack from "react-bootstrap/Stack";
import Col from "react-bootstrap/Col";

import Search from "./Searchbar";

import Youtube from "./Youtube";

class WelcomeYtube extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offsetY: "",
    };
  }
  componentDidMount() {
    // const value = window.innerWidth < 768;

    if (window.innerWidth <= 768) {
      this.setState({ offsetY: true });
    } else {
      this.setState({ offsetY: false });
    }
  }
  render() {
    const { videos } = this.props;
    const { mobile } = this.props;
    // console.log(this.props.offsetY / -50);
    // let infoCard;
    // console.log(this.props.offsetY);
    const InfoCard = () => {
      return (
        <div
        // style={{
        //   position: "relative",
        //   left: "0%",
        //   top: mobile ? "0%" : "27vh",
        // }}
        >
          <Stack gap={3}>
            <div className="stack-item">
              <strong
                style={{
                  color: "#770006",
                  // fontFamily: "Nothing You Could Do",
                  // fontSize: ".8rem",
                  padding: "0rem 0rem 2rem 1rem",
                  fontSize: mobile
                    ? `${this.props.offsetY / 110}px`
                    : `${this.props.offsetY / 2900}rem`,
                }}
              >
                {/* {this.props.youtubeTitle}
                 */}

                {this.props.youtubeChannel}
              </strong>
            </div>
            <div className="stack-item">
              {" "}
              Video Id:{" "}
              <strong
                style={{
                  color: "#770006",
                  // fontFamily: "Nothing You Could Do",

                  fontSize: ".8rem",
                }}
              >
                {this.props.youtubeId}
              </strong>
            </div>
            <div className="stack-item">
              {" "}
              Title:{" "}
              <strong
                style={{
                  color: "#770006",

                  // fontFamily: "Nothing You Could Do",
                  fontSize: ".8rem",
                }}
              >
                {this.props.youtubeTitle}
              </strong>
            </div>
          </Stack>
        </div>
      );
    };

    // console.log(videos);

    const videosHUD = videos.map((video, index) => {
      // console.log(video.id.videoId);
      // console.log(video.snippet.thumbnails.default.url);
      // console.log(video.snippet.title);

      const renderTooltip = (props) => (
        <Tooltip id={"button-tooltip" + index} {...props}>
          <h5
            style={{
              fontSize: "10px",
              // background: "white",
            }}
          >
            {this.props.youtubeTitle}
          </h5>
        </Tooltip>
      );

      // eslint-disable-next-line jsx-a11y/alt-text
      return (
        <OverlayTrigger
          placement="top"
          key={index}
          // delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <img
            key={index}
            alt={video.id.videoid}
            data-title={video.snippet.title}
            data-channel={video.snippet.channelTitle}
            className="sidebarImg observed"
            style={{
              width: mobile ? "8rem" : " 25rem",
              height: !mobile && "14rem",
              transition: "all 2s ease",
              transform:
                this.props.offsetY < 5739 &&
                `translateX(${this.props.offsetY / -20}%)`,
              marginBottom: !mobile && "2rem",
              // boxShadow: "0px 9px 20px",
              // boxShadow: "",

              // padding: "20px",
            }}
            data-id={video.id.videoId}
            onClick={this.props.handleSideBarClick}
            src={video.snippet.thumbnails.high.url}
          />
        </OverlayTrigger>
      );
    });

    return (
      <>
        <Col
          md="4"
          style={{
            background: mobile
              ? `no-repeat  url( https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm309-adj-05.jpg?w=1300&dpr=1&fit=default&crop=default&q=80&vib=3&con=3&usm=15&bg=F4F4F3&auto=format&ixlib=js-2.2.1&s=146e6c3224a2fe471b3be1066ff82bfe) center center/cover`
              : `no-repeat  url( https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm309-adj-05.jpg?w=1300&dpr=1&fit=default&crop=default&q=80&vib=3&con=3&usm=15&bg=F4F4F3&auto=format&ixlib=js-2.2.1&s=146e6c3224a2fe471b3be1066ff82bfe)fixed center center/cover`,
            // borderRadius: !mobile && "0 0 100% 0%",
          }}
        >
          <div
            className="topCol welcome2"
            style={{
              background: mobile
                ? `no-repeat  url( https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm309-adj-05.jpg?w=1300&dpr=1&fit=default&crop=default&q=80&vib=3&con=3&usm=15&bg=F4F4F3&auto=format&ixlib=js-2.2.1&s=146e6c3224a2fe471b3be1066ff82bfe)center center/cover `
                : `no-repeat  url( https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm309-adj-05.jpg?w=1300&dpr=1&fit=default&crop=default&q=80&vib=3&con=3&usm=15&bg=F4F4F3&auto=format&ixlib=js-2.2.1&s=146e6c3224a2fe471b3be1066ff82bfe)fixed center center/cover`,
              display: mobile ? "block" : "none",

              textAlign: "center",
              height: "80px",
              marginTop: "5rem",

              transform: `translateX(${this.props.offsetY / -70}%)`,
            }}
          ></div>
          <br />

          <div
            style={{
              transition: "all 2s ease",
              paddingTop: this.props.offsetY > 6100 ? "270px" : "20px",
            }}
          >
            <Search
              query={this.props.youtubeQ}
              onSubmit={this.props.handleYTSearchSubmit}
              onChange={this.props.handleYTSearchChange}
            />
          </div>
          {/* {infoCard} */}
          <div
            style={{
              textAlign: "center",
              color: "#000",
              fontWeight: "400",
              // opacity: mobile
              //   ? this.props.offsetY > 3200
              //     ? `1`
              //     : `0`
              //   : this.props.offsetY > 6000
              //   ? `1`
              //   : `0`,
              transition: "all 1s ease",
              padding: mobile ? "5%" : "1rem 3rem",
              // divadding: "10%",
            }}
          >
            <span
              className="youtubeText"
              style={{
                fontSize: "12px",
                textAlign: "center",
                fontFamily: "Nothing You Could Do",
                color: "#770006",

                // paddingBottom:""
                borderBottom: "1px solid",
              }}
            ></span>
            <br />
            <br />
            {this.props.youtubeTitle ? (
              <InfoCard />
            ) : (
              `video search with  YouTube's Data API (Try searching for
            your favorite youtube video)`
            )}
          </div>
          <br />
          <br />
        </Col>
        <Col md="8">
          <div
            style={{
              position: !mobile && "relative",
              // left: mobile ? "0%" : "1vw",
              width: "100%",
            }}
          >
            <Youtube src={this.props.youtubeSrc} />
            <div
              // className=" sidebar"
              style={{
                // overflowX: "scroll",
                position: "relative",
                left: mobile && "-4px",
                top: "1rem",
                // transform: `translateX(${this.props.offsetY / -40}%)`,
                marginTop: mobile && "1rem",
              }}
            >
              <div
                style={{
                  width: "100%",
                  // height: "326px",
                  display: "flex",
                  // boxShadow: "0px 9px 20px",
                  // background: "#000",
                  justifyContent: mobile ? "left" : "center",
                  overflow: "auto",
                  flexWrap: "nowrap",

                  // transform: `translateX(${this.props.offsetY / -50}px)`,
                }}
              >
                {videosHUD}
              </div>
            </div>
          </div>
        </Col>
      </>
    );
  }
}

export default WelcomeYtube;
