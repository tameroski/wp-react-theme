import React from 'react';
import DocumentTitle from 'react-document-title';
import {connect} from 'react-redux';

import { fetchPage } from "../redux/pageActions";

class Page extends React.Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {

		this.props.fetchPage(this.props.params.postSlug)
	}

	componentWillReceiveProps(nextProps){
		var postSlug = nextProps.params.postSlug != null ? nextProps.params.postSlug : ''

		if (postSlug != this.props.page.slug && postSlug != ''){
			this.props.fetchPage(postSlug)
		}
	}

	componentDidMount(){
	}

	componentDidUpdate(){
	}

	render(){

		return (
			<main>
				<section className="container">
					<h1 dangerouslySetInnerHTML={{__html: this.props.page.title}}></h1>
					<div dangerouslySetInnerHTML={{__html: this.props.page.content}}></div>
				</section>
			</main>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		page: state.page
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		fetchPage: (slug) => {
			dispatch(fetchPage(slug));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);