import React from 'react'
import {Router, Route, Switch } from 'react-router-dom'
import App from '../containers/App'
import Austur from '../containers/Austur'
import NordAustur from '../containers/NordAustur'
import NordVestur from '../containers/NordVestur'
import Sudur from '../containers/Sudur'
import Vestfirdir from '../containers/Vestfirdir'
import Vestur from '../containers/Vestur'
import NotFound from '../components/NotFound'
import createHistory from 'history/createBrowserHistory'

// Create a history object that we can access out side of browser to push to locations
//simple import history in other component
export const history = createHistory();

const AppRouter =() => (  
    <Router history={history}>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/austurland" component={Austur} />
            <Route path="/nausturland" component={NordAustur} />
            <Route path="/nvesturland" component={NordVestur} />
            <Route path="/sudurland" component={Sudur} />
            <Route path="/vestfirdir" component={Vestfirdir} />
            <Route path="/vesturland" component={Vestur} />
            <Route component={NotFound} />
        </Switch>
    </Router>
)
export default AppRouter;