import React from 'react'
import DocumentTitle from 'react-document-title'

class Home extends React.Component {

	render(){

		return (
			<DocumentTitle title="WP React Theme">
				<main className="container">
					<h1>Welcome</h1>
					<div>Homepage content</div>
				</main>
			</DocumentTitle>
		);
	}
}

export default Home;