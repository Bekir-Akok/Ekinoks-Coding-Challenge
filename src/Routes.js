import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '@pages/Home';
import Pokemon from '@pages/Pokemon';
import Favorites from '@pages/Favorites';
import Game from '@pages/Game';
import ScrollToTop from '@components/ScrollToTop';

const Routes = () => {

    const routing = [
        {
            path: "/",
            exact: true,
            component: Home
        },
        {
            path: "/Favorites",
            exact: true,
            component: Favorites
        },
        {
            path: "/Pokemon/:name",
            exact: true,
            component: Pokemon
        },
        {
            path: "/Game/catch/:name",
            exact: true,
            component: Game
        }
    ]

    return (
        <Router>
            <ScrollToTop />
            <Switch>
                {
                    routing &&
                    routing.map(route => {
                        return (
                            <Route
                                key={route.path}
                                exact
                                path={route.path}
                                component={route.component} />
                        )
                    })
                }
            </Switch>
        </Router>
    )
}

export default Routes
