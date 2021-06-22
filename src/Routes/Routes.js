import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../Pages/Home/index';
import Company from '../Pages/Company/index';
import Pentest from '../Pages/Pentest/index';
import SocialEngeneering from '../Pages/SocialEngineering';
import Justification from '../Pages/Justification';
import Contact from '../Pages/Contact/index';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/empresa" component={Company} />
                <Route path="/pentest" component={Pentest} />
                <Route path="/engenharia-social" component={SocialEngeneering} />
                <Route path="/justificacao" component={Justification} />
                <Route exact path="/contato" component={Contact} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;