import React from "react";
import {render} from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import {Provider} from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import App from "./containers/app";
import store from "./redux/store";
import Home from './components/home';
import Page from './components/page';

const history = syncHistoryWithStore(browserHistory, store)

render(
    <Provider store={store}>
        <Router history={history}>
			<Route path={wp.base_path} component={App}>
				<IndexRoute component={Home}/>
				<Route path={wp.base_path + ":postSlug"} component={Page}/>
			</Route>
		</Router>
    </Provider>,
    window.document.getElementById('app'));