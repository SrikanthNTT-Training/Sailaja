import axios from 'axios' ;

import React from 'react';

export default class Personlist extends  React.Component {

state = { 
    persons : [],
    }
      handleSubmit = event => {
          event.preventDefault();
          const user = {
              name: this. state.name
      }
 componentDidMount() 
     axios.get("https://jsonplaceholder.typicode.com/users", {user})
    
     .then (res => {
         console.log(res);
         console.log(data);
         this.setState({persons : res.data});
     });
         axios.post("https://jsonplaceholder.typicode.com/users", {user})
    
         .then (res => {
         console.log(res);
         console.log(data);
         this.setState({persons : res.data});
     });

     axios.put("https://jsonplaceholder.typicode.com/users", {user})
    
         .then (res => {
         console.log(res);
         console.log(data);
         this.setState({persons : res.data});
        });

           render () 
               return (
                   
                
                   
                   
              <form onsubmit={this.onChange}>
                
            <ul>     
                {This.state.person.map(person => (

                <li key={person.id}>{person.name}</li>
                {this. state .persons.map(person => <li key={person.Id}>{person.name}</li>) }
                
                </ul> );
            
             <label>user name</label>
                 
           <input type="text" value={this.state.persons} onChange={this.onChangeusername}/></form>
                }