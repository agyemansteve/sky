import React from "react";

import NameCard from "./NameCard";

import Search from "./Searchbar";

class Welcome extends React.Component {
  render() {
    const { photos } = this.props;
    const { mobile } = this.props;
    const { offsetY } = this.props;

    const photoHUD = photos.map((photo, index) => {
      // eslint-disable-next-line jsx-a11y/alt-text
      // console.log(photo);
      return (
        // eslint-disable-next-line jsx-a11y/alt-text

        <img
          key={index}
          alt={photo.alt}
          className="sidebarImg  observed"
          style={{
            width: mobile ? "8rem" : " 25rem",
            transition: "all 2s ease",
            transform:
              offsetY > 2145 && `translateX(${this.props.offsetY / -20}%)`,
          }}
          data-aurthor={photo.photographer}
          onClick={this.props.handleSideBarClick}
          src={photo.src.landscape}
        />
      );
    });
    // console.log(photos);

    const ele = (
      <>
        <div style={{ paddingTop: mobile && "120%" }}>
          <Search
            query={this.props.pexelQuery}
            mobile={mobile}
            offsetY={offsetY}
            onSubmit={this.props.handleSearchSubmit}
            onChange={this.props.handleSearchChange}
          />
        </div>

        <span
          className="pexelText"
          style={{
            fontSize: "12px",
            textAlign: "center",
            fontFamily: "Nothing You Could Do",

            color: "#770006",
            borderBottom: "1px solid",
          }}
        ></span>
        <br />
        <br />
        <div className="sidebar">
          <div className="sidebarInner ">{photoHUD}</div>
        </div>

        <NameCard>
          <div
            className="nameCard"
            style={{
              position: "relative",
              top: "76px",
              left: "-41%",
            }}
          >
            {this.props.authorName &&
              ` Photos provided by ${this.props.authorName} on Pexels`}
          </div>
        </NameCard>
      </>
    );

    return <div>{ele}</div>;
  }
}

export default Welcome;
