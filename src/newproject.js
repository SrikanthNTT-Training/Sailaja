import React, { useState } from 'react';
import './App.css ';
import Personlist from './component/personlist';

function App() {

  const [value, setvalues]=useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  }
  const handlefirstNameInputChange = (event) => {
    setvalues({...values, firstName: event.target.value})


    const handlelasttNameInputChange = (event) => {
      setvalues({...values, lastName: event.target.value})


      const handleemailInputChange = (event) => {
        setvalues({...values, email: event.target.value})
    }
  }



return (
  <div className="from-container">
    <form className="register-form">
      <div className="success-message">success! thank you register</div>
      <input
      onChange={handlefirstNameInputChange}
      value={value.firstName}
      className="form=field"
      placeholder="first name"
      name="firstname" />
      <input
      onChange={handlelastNameInputChange}
      value={value.lastName}
      className="form-field"
      placeholder="lastname"
      name="lastname" />
      <input
      onChange={handleemailInputChange}
      value={value.email}
      className="form-field"
      placeholder="email"
      name="email" />
      <button
      className="form-field"
      type="submit">register</button>
      </form>
      </div>
)};
export default App;