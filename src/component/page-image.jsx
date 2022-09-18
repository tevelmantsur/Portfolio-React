import React from "react";

function ImagePage(props) {
  return (
    <img
      id="potee"
      className="img"
      style={{ width: "100%" }}
      alt={props.name}
      src={require(`../images/Pages/${props.image}`)}
    />
  );
}

export default ImagePage;
