import React from 'react';

class Content extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			content : '', 
		}
	}

	componentDidMount() {
		this.getPage()
	}

	render(){
		return (
			<main>
				<div  dangerouslySetInnerHTML={{__html: this.props.content}}></div>
			</main>
		);
	}

	// Private methods
	getPage(){
		console.log(this.props.params.postId);

		var postId = this.props.params.postId != null ? this.props.params.postId : '';

		if (postId != ''){
			$.ajax({
	            type: "GET",
	            url: wp.root+"wp/v2/pages/"+postId,
	            success: function(response){
	            	console.log(response)

			        this.setState({
			            content : 'Content ' + response.content.rendered
			        })

	            }.bind(this)
	        });
		}
        
	}
}

export default Content;