import React from "react";
import {render} from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import {Provider} from 'react-redux'

import App from "./containers/app.js";
import store from "./redux/store.js";
import Home from './components/home.js'
import Page from './components/page.js'

render(
    <Provider store={store}>
        <Router history={browserHistory}>
			<Route path={wp.base_path} component={App}>
				<IndexRoute component={Home}/>
				<Route path={wp.base_path + ":postSlug"} component={Page}/>
			</Route>
		</Router>
    </Provider>,
    window.document.getElementById('app'));