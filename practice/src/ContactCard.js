import React, { useEffect, useState } from 'react';

const ContactCard=(props) =>{
    console.log(props);
    const [showAge, setShowAge] = useState(false);
return (
    
         <div className="contact-card">
            <img src= {props.avtarUrl} alt="profile"></img> 
            <div className="user-details">
              <p>Name:{props.name}</p>
              <p>Email: {props.email}</p>
              <button onClick={()=> setShowAge(!showAge)}>show Age</button>
              {showAge && <p>Age: {props.age}</p>}
            </div>
          </div>
);
};

export default ContactCard;