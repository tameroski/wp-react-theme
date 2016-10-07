import React from 'react';
import {render} from 'react-dom';

// Components
import Header from './components/header.js';
import Content from './components/content.js';
import Footer from './components/footer.js';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			pages : []
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
		$.ajax({
            type: "GET",
            url: API_URI+"/pages",
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
		            pages: pages
		        })
            }.bind(this)
        });
	}
}

render(<App />, document.getElementById('content'));