import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../Pages/Home/index';
import Company from '../Pages/Company/index';
import Pentest from '../Pages/Pentest/index';
import Contact from '../Pages/Contact/index';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/empresa" component={Company} />
                <Route path="/pentest" component={Pentest} />
                <Route exact path="/contato" component={Contact} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;