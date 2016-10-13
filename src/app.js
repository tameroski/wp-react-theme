import React from 'react'
import {render} from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { RouteTransition } from 'react-router-transition'

// Components
import Header from './components/header.js'
import Home from './components/home.js'
import Page from './components/page.js'
import Footer from './components/footer.js'

class App extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			routes : []
		}
	}

	componentWillMount(){

		// Routes to pages from wp
		var routes = []
		for (var i = wp.routes.length - 1; i >= 0; i--) {
    		var route = wp.routes[i]

    		if (route.type == 'page'){
	    		routes.push({
	    			id: route.id,
	    			slug: route.slug,
	    			title: route.title,
	    		});
    		}
    	}

    	this.state = {
			routes : routes
		}
	}

	render () {
		return (
			<div>
				<Header menuItems={this.state.routes}/>
				<RouteTransition
					pathname={this.props.location.pathname}
					atEnter={{ opacity: 0 }}
					atLeave={{ opacity: 0 }}
					atActive={{ opacity: 1 }}
				>
					{this.props.children}
				</RouteTransition>
				<Footer />
			</div>
		);
	}
}

render(
	<Router history={browserHistory}>
		<Route path={wp.base_path} component={App}>
			<IndexRoute component={Home}/>
			<Route path={wp.base_path + ":postSlug"} component={Page}/>
		</Route>
	</Router>
, document.getElementById('content'));