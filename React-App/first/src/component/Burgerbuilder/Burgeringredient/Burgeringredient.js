import React, {Component} from 'react';
import propType from 'prop-types';
import classes from './Burgeringredient.css';

class Burgeringredient extends Component {
    render () {
        let ingredient = null;
    

 



    switch (this.props.type) {

            case ('bread-bottom'):
            ingredient= <div className={classes.BreadBottom}></div>;
              break;
              case ('bread-Top'):
                  ingredient = (
                      <div className={classes.BreadTop}>
                          <div> className={classes.Seeds}</div>
                          <div> className={classes.Seeds}</div>
                          </div>
                  );
                  break;
                  case ('meat'):
                   ingredient = <div className={classes.Meat}></div>;
                   break;
                   default:
                       ingredient = null;
                  }
                   return ingredient;
                }
            
                
             //BurgerIngredient.prop.type = {
         //type:propType.string.isRequired
        }




export default Burgeringredient;