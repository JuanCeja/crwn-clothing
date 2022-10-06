import React from "react";
import { useState } from "react";

import FormInput from "../form-input/form-input.component";

import './sign-up-form.styles.scss';

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

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

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch(error){
      if(error.code === 'auth/email-already-in-use'){
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  };
  
  // this function will take our input whenever the text changes in our input fields
  const handleChange = (event) => {

    // were going to utilize this name to tell our set state which of the fields to update
    const { name, value } = event.target;

    // we spread all of the fields and then were only going to update the appropriate field by using these square brackets inside of our object notation.
    setFormFields({...formFields, [name]: value})
  };


  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>

        {/* on our input we want to name them the same as the name of the actual attribute that were trying to update */}
        {/* we also set our value to our variable so changes are circular. like this the value from the state is the value thats shown in the input */}
        <FormInput
          label = "Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        {/* on our input we want to name them the same as the name of the actual attribute that were trying to update */}
        {/* we also set our value to our variable so changes are circular. like this the value from the state is the value thats shown in the input */}
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
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
