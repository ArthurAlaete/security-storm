import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../Pages/Home/index';
import Contact from '../Pages/Contact/index';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/contato" component={Contact}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;