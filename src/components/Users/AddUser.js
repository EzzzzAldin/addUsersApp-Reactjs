import React, { useState } from "react";

import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const enteredNameHandler = (event) => {
    // Lithen Add Name In Input Filed
    setEnteredName(event.target.value);
  };
  const enteredAgeHandler = (event) => {
    // Lithen Add Age In Input Filed
    setEnteredAge(event.target.value);
  };
  const submitHandler = (event) => {
    // When Add New User Don't Reload Page
    event.preventDefault();
    // Check If Form Fileds Empty
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "invalid Input",
        message: "Please Enter a valid name and age (non-empty values.)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "invalid age",
        message: "Please Enter a valid age ( > 0 ). ",
      });
      return;
    }
    // Add New User In Dummy Data
    const user = {
      id: Math.random().toString(),
      username: enteredName,
      age: enteredAge,
    };
    props.onAddUser(user);
    // Clear Fileds When Add User
    setEnteredName("");
    setEnteredAge("");
  };
  // Error Function
  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onConfirem={errorHandler}
        />
      )}
      <form onSubmit={submitHandler}>
        <Card className={styles.input}>
          <label htmlFor="username">UserName</label>
          <input
            id="username"
            type="text"
            value={enteredName}
            onChange={enteredNameHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={enteredAgeHandler}
          />
          <Button type="submit">Add User</Button>
        </Card>
      </form>
    </div>
  );
};

export default AddUser;
