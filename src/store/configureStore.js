import { createStore, combineReducers, 
    applyMiddleware, compose 
} from 'redux';
import thunk from 'redux-thunk';

import {
    authReducer, areaReducer
} from '../reducers/reducers'


// Redux Thunk middleware allows you to write action creators that return a function instead of an action. 
// The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition are met. 

// The initial state object holds the initial state, combineReducer combines all the induvidual states from reducers
export default ( initialState = {} ) => {
    const reducer = combineReducers({
        auth: authReducer,
        area: areaReducer
    });
    
    const store = createStore(reducer, initialState, compose(
        applyMiddleware(thunk)
    ));
    return store;
}