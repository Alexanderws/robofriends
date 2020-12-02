import React from "react";

const ScrollContainer = (props) => {
  return (
    <div style={{ overflowY: "scroll", height: "700px" }}>
      {props.children}
    </div>
  );
};

export default ScrollContainer;
