import React from "react";

import styles from "./Card.module.css";

const Container = (props) => {
  return (
    <div className={`${styles.card} ${props.className}`}>{props.children}</div>
  );
};

export default Container;
