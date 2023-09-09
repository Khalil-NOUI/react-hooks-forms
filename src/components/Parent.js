
import React, { useState } from "react";
import Form from "./Form";
import Display from "./Display"

function ParentComponent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
    console.log(event.target.value)
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
    console.log(event.target.value)

  }

  return (
    <>

    <Form
      firstName={firstName}
      lastName={lastName}
      handleFirstNameChange={handleFirstNameChange}
      handleLastNameChange={handleLastNameChange}
    />

    <Display
        firstName={firstName}
        lastName={lastName}
    />

    </>
  );
}

export default ParentComponent;
