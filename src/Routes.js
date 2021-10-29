import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Pokemon from './pages/Pokemon';
import Favorites from './pages/Favorites';
import ScrollToTop from './components/ScrollToTop';

const Routes = () => {
    return (
        <Router>
            <ScrollToTop />
            <Switch>
                <Route exact path="/pokemon/:name">
                    <Pokemon />
                </Route>
                <Route exact path="/Favorites">
                    <Favorites />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes
