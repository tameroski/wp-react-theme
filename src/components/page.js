import React from 'react'
import DocumentTitle from 'react-document-title'

class Page extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			content : '', 
			title : ''
		}
	}

	componentWillMount() {
		this.getPage(this.props.params.postSlug)
	}

	componentWillReceiveProps(nextProps){
		var postSlug = nextProps.params.postSlug != null ? nextProps.params.postSlug : ''

		this.getPage(postSlug)
	}

	render(){

		return (
			<DocumentTitle title={this.state.title}>
				<main>
					<section className="container">
						<h1 dangerouslySetInnerHTML={{__html: this.state.title}}></h1>
						<div dangerouslySetInnerHTML={{__html: this.state.content}}></div>
					</section>
				</main>
			</DocumentTitle>
		);
	}

	// Private methods
	getPage(slug){

		if (slug != ''){

			// Looking for id within routes
			var id = 0
			for (var i = wp.routes.length - 1; i >= 0; i--) {
				if (wp.routes[i].slug == slug){
					id = wp.routes[i].id
					break
				}
			}

			$.ajax({
	            type: "GET",
	            url: wp.root+"wp/v2/pages/"+id,
	            success: function(response){

			        this.setState({
			            content : response.content.rendered,
			            title : response.title.rendered
			        })

	            }.bind(this),
	            error: function(){
					this.setState({
			            content : 'Page not found',
			            title : 'Page not found'
			        })
	            }.bind(this),
	        });
		}
        
	}
}

export default Page;