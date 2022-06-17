import React from "react";

import UserList from "./UserList";
import Container from "../UI/Card";

const Users = (props) => {
  return (
    <Container>
      {props.users.map((user) => (
        <UserList key={user.id} userName={user.username} age={user.age} />
      ))}
    </Container>
  );
};

export default Users;
