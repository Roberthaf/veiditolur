//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap/dist/css/bootstrap-theme.css'
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import './styles/index.css';
//import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>,
    document.getElementById('root'));
//registerServiceWorker();
