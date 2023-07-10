import React from "react";
import headingStyle from "./heading.module.css";
import PropTypes from "prop-types";
export const Heading = ({ heading }) => {
  return <h3 className={`${headingStyle.heading} mt-10`}>{heading}</h3>;
};

Heading.propTypes = {
  heading: PropTypes.string.isRequired,
};
