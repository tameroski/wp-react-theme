import React from 'react'
import DocumentTitle from 'react-document-title'

import { fetchPage } from "../redux/pageActions.js";

import {connect} from 'react-redux'

class Page extends React.Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {

		this.props.fetchPage(this.props.params.postSlug)
	}

	componentWillReceiveProps(nextProps){
		var postSlug = nextProps.params.postSlug != null ? nextProps.params.postSlug : ''

		//this.props.fetchPage(postSlug)
	}

	componentDidMount(){
	}

	componentDidUpdate(){
	}

	render(){

		return (
				<main>
					<section className="container">
						<h1>TITLE</h1>
						<div>Content</div>
					</section>
				</main>
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

export default connect(mapStateToProps, mapDispatchToProps)(Page);