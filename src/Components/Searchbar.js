import React from "react";

class Search extends React.Component {
  expand = () => {
    const searchField = document.getElementById("searchField");
    searchField.style.width = this.props.mobile ? "140px" : "250px";
  };

  render() {
    const { query } = this.props;

    const { offsetY } = this.props;

    return (
      <div
        style={{
          paddingTop: this.props.mobile
            ? offsetY > 1540
              ? "100px"
              : "0px"
            : offsetY > 1783
            ? "270px"
            : "120px",
          textAlign: "center",
          transition: "all 2s ease",
        }}
      >
        <h6 style={{ fontSize: "1rem", fontWeight: "100" }}>{query}</h6>

        <form className="search" onSubmit={this.props.onSubmit}>
          <input
            type="text"
            id="searchField"
            name="pexelQuery"
            onChange={this.props.onChange}
            onClick={this.expand}
            placeholder="Search...."
          />

          <button type="submit">
            <i className="fas fa-paper-plane bounce"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
