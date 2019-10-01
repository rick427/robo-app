import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './App';
import './index.css';
import 'tachyons';
import { searchRobots } from './reducers';

const store = createStore(searchRobots)


render(
<Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));

