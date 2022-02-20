import React from "react";

export default function SideBar(props) {
  const { array } = props;

  const display = array.map((photo) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    // console.log(photo.src.landscape);
    return (
      // <h1> {photo.id}</h1>
      // eslint-disable-next-line jsx-a11y/alt-text
      <img style={{ width: "5rem" }} src={photo.src.landscape} />
    );
  });

  return <div className="sidebar">{display}</div>;
}
