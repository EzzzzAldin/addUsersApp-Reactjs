import React from "react";

import styles from "./ErrorModel.module.css";
import Container from "./Card";
import Button from "./Button";

const ErrorModel = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onConfirem} />
      <Container className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onConfirem}>Okay</Button>
        </footer>
      </Container>
    </div>
  );
};

export default ErrorModel;
