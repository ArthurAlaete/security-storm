import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ScrollToTop from '../Components/ScrollToTop';
import Home from '../Pages/Home/index';
import Company from '../Pages/Company/index';
import Pentest from '../Pages/Pentest/index';
import SocialEngeneering from '../Pages/SocialEngineering';
import Justification from '../Pages/Justification';
import PentestTypes from '../Pages/PentestTypes';
import PentestPhases from '../Pages/PentestPhases';
import GeneralReports from '../Pages/GeneralReports';
import HackersAttacks from '../Pages/HackersAttacks';
import Contact from '../Pages/Contact/index';
import PageNotFound from '../Pages/PageNotFound';

const Routes = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/empresa" component={Company} />
                <Route path="/testes-invasao/pentest" component={Pentest} />
                <Route path="/testes-invasao/engenharia-social" component={SocialEngeneering} />
                <Route path="/testes-invasao/justificacao" component={Justification} />
                <Route path="/testes-invasao/tipos-pentest" component={PentestTypes} />
                <Route path="/testes-invasao/fases-pentest" component={PentestPhases} />
                <Route path="/testes-invasao/relatorios" component={GeneralReports} />
                <Route path="/testes-invasao/ataques" component={HackersAttacks} />
                <Route path="/contato" component={Contact} />
                <Route path="*" component={PageNotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;