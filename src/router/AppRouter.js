import React from 'react'
import {Router, Route, Switch } from 'react-router-dom'
import App from '../containers/App'

import createHistory from 'history/createBrowserHistory'

// Create a history object that we can access out side of browser to push to locations
//simple import history in other component
export const history = createHistory();

const AppRouter =() => (  
    <Router history={history}>
        <Switch>
            <Route exact path="/" component={App} />
        </Switch>
    </Router>
)
export default AppRouter;