import React from 'react';
import { useState } from 'react';

let defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);

  return (
    <div>
      <h1>Sign Up Form</h1>
      <form>
        <label>Display Name</label>
        <input type="text" required name='displayName'/>
        
        <label>Email</label>
        <input type="email" required/>

        <label>Password</label>
        <input type="password" required/>

        <label>Confirm Password</label>
        <input type="password" required/>

        <button>Sign Up</button>
      </form>
    </div>
  )
}

export default SignUpForm