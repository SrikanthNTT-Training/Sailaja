import React from 'react';

import Aux1 from '../../hoc/Aux1';
import classes from './Layout.css';

const layout =  (props) => (
    <aux1>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>
        {props.Children}
    </main>
    

</aux1>
);


export default layout;