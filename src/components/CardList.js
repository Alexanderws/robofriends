import React from "react";

import Card from "./Card";

const CardList = ({ listToRender }) => {
  if (true) {
    throw new Error("HALLA");
  }
  return listToRender.map((obj, index) => {
    return (
      <Card key={index} id={index} name={obj.name} email={obj.email} />
    );
  });
};

export default CardList;
