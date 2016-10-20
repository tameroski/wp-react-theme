import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { routerReducer } from 'react-router-redux';

import pageReducer from './pageReducer';

// TODO : remove logger when in production mode
const middlewares = [thunk, promise(), logger()];

export default createStore(
	combineReducers({
		page: pageReducer,
		routing: routerReducer
	}),
	{},
	applyMiddleware(...middlewares)
);