import React, { useState } from 'react';
import './App.css ';


function App() {
  const [values, setvalue] = useState(
    {

      firstName: "",
      lastName: "",
      email:"",
    });
     const [submitted, setsubmitted] = useState(false)


    const handleFirstNameInputChange = (event) => {
      setvalues({...values, firstName: event.target.value})
    }
    const handlelastNameInputChange = (event) => {
      setvalues({...values, lastName: event.target.value})
    }
     const handleEmailInputChange = (event) => {
      setvalues({...values, email: event.target.value})
    }
    const handlesubmit = (event) =>{
      event.preventDefault();
        setsubmitted(true);
    }
   
  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handlesubmit}>
      <div className="success-message">success thank you for register</div>
        <input
          onChange={handleFirstNameInputChange}
          value={value.firstName}
          className="form-field"
          placeholder="First Name"
          name="first name" />
          <span>please enter a first name</span>

        <input
          onChange={handlelastNameInputChange}
          value={value.lastName}
          className="form-field"
          placeholder="last name"
          name="last name" />
          <span>please enter a last name</span>
        <input 
        onChange={handleemailNameInputChange}
          value={value.email}
          className="Email"
          placeholder="Email"
          name="Email" />
          <span>please enter a email address</span>
      <button
      className="form-feild"
      type="submit">register</button>
      </form>
    </div>

  );
}