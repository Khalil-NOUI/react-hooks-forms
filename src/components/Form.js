import React from "react";

function Form(props) {

  
  return (

    <form>

      <label htmlFor="firstname">
        <input
        name="firstname" 
        type="text"
        placeholder="enter your First name"
        onChange ={props.handleFirstNameChange}
        value={props.firstName}
        />
      </label>

      <label htmlFor="lastname" >
        <input
        name="lastname"
        placeholder="enter your Last name"
        type="text" 
        id="lastname" 
        onChange={props.handleLastNameChange}
        value={props.lastName}
        />
      </label>
        <button type="submit"> Submit </button>

    </form>
  );
}

export default Form;