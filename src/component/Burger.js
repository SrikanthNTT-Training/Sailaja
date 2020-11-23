import React from 'react';

import classes from './Burgerbuilder/Burger.css';

import BurgerIngredient from './Burgerbuilder/Burgeringredient/Burgeringredient';

const burger = (props ) => {
    return (

        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            
            <BurgerIngredient type="bread-meta" />
            <BurgerIngredient type="bread-bottom" />
            
        </div>
    );
};

export default burger;