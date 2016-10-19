import React from 'react'
import {connect} from 'react-redux'

// Components
import Header from '../components/header.js'
import Footer from '../components/footer.js'

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
				<div>{this.props.page.loading}</div>
				<Header menuItems={this.state.routes}/>
					{this.props.children}
				<Footer/>
			</div>
		);
	}
}

const mapStateToProps = function(state){
	return {
		page: state.page
	}
}
const mapDispatchToProps = function(dispatch){
	return {
		fetchPage: function(slug){
			dispatch(fetchPage(slug));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);