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
			pages : [],
		}
	}

	render () {
		return (
			<div>
				<Header menuItems={this.state.pages}/>
				<Content />
				<Footer />
			</div>
		);
	}

	componentDidMount() {

		// Getting Pages
		var pages = [];
		var content = '';
		$.ajax({
            type: "GET",
            url: wp.root+"wp/v2/pages",
            success: function(response){

            	for (var i = response.length - 1; i >= 0; i--) {
            		var page = response[i];

            		pages.push({
            			slug: page.slug,
            			title: page.title.rendered,
            			content: page.content.rendered,
            			uri: page.link,
            		});
            	}

		        this.setState({
		            pages: pages,
		        })

            }.bind(this)
        });
	}
}

//console.log(wp);

render(
	<Router history={browserHistory}>
		<Route path={wp.base_path} component={App}>
			<Route path={wp.base_path + ":pageSlug"} component={App} />
		</Route>
	</Router>
, document.getElementById('content'));