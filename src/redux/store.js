import {createStore, combineReducers, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';

import page from './pageReducer.js'

export default createStore(
	combineReducers({
		page
	}),
	{},
	applyMiddleware(thunk)
);