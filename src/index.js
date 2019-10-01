import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger'
import App from './App';
import './index.css';
import 'tachyons';
import { searchRobots } from './reducers';

const logger = createLogger();
const store = createStore(searchRobots, applyMiddleware(logger))

render(
<Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));

