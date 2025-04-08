import React from "react";
import "./Container.css";
import Store from "../Stores/Store";

function Container({ children, parentComponent }) {
  let className = "window";

  if (parentComponent === "Your_stores") {
    className = "Store";
  }

  console.log("Children:", children);
  console.log("Applied class:", className);
  console.log("parent component:", parentComponent);

  return <div className={className}>{children}</div>;
}

export default Container;
