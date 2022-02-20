import React from "react";

class Youtube extends React.Component {
  state = {};
  render() {
    return (
      <div className="Youtube observed">
        <iframe
          title="ytplayer"
          id="ytplayer"
          type="text/html"
          // width="400"
          // height="400"
          src={this.props.src}
          frameBorder="0"
        ></iframe>
      </div>
    );
  }
}

export default Youtube;
