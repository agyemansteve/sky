import React from "react";

class NameCard extends React.Component {
  render() {
    return (
      <div
        style={{
          fontSize: "11px",
          right: "-42%",
          top: "28vh",
          position: "relative ",
        }}
        className=""
      >
        {" "}
        {this.props.children}{" "}
      </div>
    );
  }
}

export default NameCard;
