/**
 * React renderer.
 */
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router'; // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app';
import configureStore, { history } from '@/renderer/store';

const store = configureStore();

// Import the styles here to process them with webpack
import '@public/style.css';

const root = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    root,
);
