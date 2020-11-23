import { Component } from 'react';
import Layout from './component/Layout/Layout';


import BurgerBuilder from './component/Burgerbuilder/Burgerbuilder';

class App extends Component {
  render() {
    return (
      <div>
        <layout>
          
        
         <BurgerBuilder />
          </layout>
      </div>
      
    );
  }
}

export default App;