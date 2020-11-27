import React, { useEffect, useState } from 'react'; 
 import axios from 'axios'; 
import ContactCard from './ContactCard';

 
 const App = () =>{ 
   const [contacts, setcontacts] = useState([]); 

 
  useEffect(() =>{ 

 
     axios.get("https://randomuser.me/api/?results=3").then(item =>{ 
  console.log(JSON.stringify(item.data.results)); 
    setcontacts(item.data.results); 
 }) 

 
  },[]); 
 
 

 
 return ( 
    <> 
   {contacts.map(result =>( 
      <ContactCard  
      avtar={result.picture.large} 
      name={result.name.first} 
      email={result.email} 
age={result.dob.age} 
      /> 
    ))} 
     </> 
      
   ); 
 } 


      export default App;