import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import Users from "./components/Users/Users";

const DUMMY_USERS = [];

const App = () => {
  // Add All Users In Hook To Add And Loop Users
  const [users, setUsers] = useState(DUMMY_USERS);
  // Add New User Data
  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <Users users={users} />
    </div>
  );
};

export default App;
