import React from "react";
import { useState } from "react";

import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  // we destructor off these values so we can use them later in our code
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields)

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    
  }
  
  // this function will take our input whenever the text changes in our input fields
  const handleChange = (event) => {

    // were going to utilize this name to tell our set state which of the fields to update
    const { name, value } = event.target;

    // we spread all of the fields and then were only going to update the appropriate field by using these square brackets inside of our object notation.
    setFormFields({...formFields, [name]: value})
  };


  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <label>Display Name</label>

        {/* on our input we want to name them the same as the name of the actual attribute that were trying to update */}
        {/* we also set our value to our variable so changes are circular. like this the value from the state is the value thats shown in the input */}
        <input
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <label>Email</label>
        {/* on our input we want to name them the same as the name of the actual attribute that were trying to update */}
        {/* we also set our value to our variable so changes are circular. like this the value from the state is the value thats shown in the input */}
        <input
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <label>Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <label>Confirm Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
