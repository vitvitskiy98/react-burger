import React from "react";
import headingStyle from "./heading.module.css";
export const Heading = ({ heading }) => {
  return <h3 className={`${headingStyle.heading} mt-10`}>{heading}</h3>;
};
