import React from 'react'

class Loader extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			loading : true
		}
	}

	render () {
		var loaderStyle = this.state.loading?{display: 'block'}:{display: 'none'}
		return (
			<div style={loaderStyle}>
				Loading...
			</div>
		);
	}
}

export default Loader;