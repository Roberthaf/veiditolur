import React from 'react'
import {Router, Route, Switch } from 'react-router-dom'
import App from '../containers/App'
import Landshluti from '../containers/Landshluti'
import Veidia from '../containers/RiverInfo'
import NotFound from '../components/NotFound'
import createHistory from 'history/createBrowserHistory'

// Create a history object that we can access out side of browser to push to locations
//simple import history in other component
//            <Route exact path="/austurland/:river" component={Rivers} /> 

export const history = createHistory();

const AppRouter =() => (  
    <Router history={history}>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/:id" component={Landshluti} />
            <Route exact path="/:id/:id" component={Veidia} />  
            <Route path="/Villa404" component={NotFound} />
        </Switch>
    </Router>
)
export default AppRouter;
