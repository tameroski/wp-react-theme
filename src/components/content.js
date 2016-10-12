import React from 'react';

class Content extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			content : '', 
			title : ''
		}
	}

	componentWillMount() {
		this.getPage(this.props.params.postId)
	}

	componentWillReceiveProps(nextProps){
		var postId = nextProps.params.postId != null ? nextProps.params.postId : '';

		this.getPage(postId)
	}

	render(){
		return (
			<main>
				<h1 dangerouslySetInnerHTML={{__html: this.state.title}}></h1>
				<div dangerouslySetInnerHTML={{__html: this.state.content}}></div>
			</main>
		);
	}

	// Private methods
	getPage(id){

		if (id != ''){
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

export default Content;