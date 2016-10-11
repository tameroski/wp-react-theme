import React from 'react';
import {render} from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'

// Components
import Header from './components/header.js';
import Content from './components/content.js';
import Footer from './components/footer.js';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			routes : [],
		}
	}

	render () {
		return (
			<div>
				<Header menuItems={this.state.routes}/>
				{this.props.children}
				<Footer />
			</div>
		);
	}

	componentDidMount() {

		// Getting Pages
		var routes = [];

		$.ajax({
            type: "GET",
            url: wp.root+"wp/v2/pages",
            success: function(response){

            	for (var i = response.length - 1; i >= 0; i--) {
            		var route = response[i];

            		routes.push({
            			id: route.id,
            			slug: route.slug,
            			title: route.title.rendered,
            		});
            	}

		        this.setState({
		            routes: routes
		        })

            }.bind(this)
        });
	}
}

//console.log(wp);

render(
	<Router history={browserHistory}>
		<Route path={wp.base_path} component={App}>
			<Route path={wp.base_path + ":postId"} component={Content} />
		</Route>
	</Router>
, document.getElementById('content'));