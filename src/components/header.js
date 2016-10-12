import React from 'react';

import Menu from './menu.js';

class Header extends React.Component {
	render(){
		return (
			<header className="navbar navbar-inverse">
				<div className="container">
					<div className="navbar-header">
						<span className="navbar-brand">Header</span>
					</div>
					<Menu menuItems={this.props.menuItems}/>
				</div>
			</header>
		);
	}
}

export default Header;