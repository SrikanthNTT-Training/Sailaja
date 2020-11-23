import React, { Component } from 'react';

import Aux from '../../hoc/Aux1';
import Burger from '../Burger';

class BurgerBuilder extends Component {
    render() {
        return (
            <Aux>
                <Burger />
                <div>Burger controls</div>
            </Aux>

        );
    
    }
}
export default BurgerBuilder;