import React from "react";

import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <div className={styles.card}>
      <div>{props.userName}</div>
      <div>{`${props.age} years old`}</div>
    </div>
  );
};

export default UserList;
