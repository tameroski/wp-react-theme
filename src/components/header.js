import React from 'react';

import Menu from './menu.js';

class Header extends React.Component {
	render(){
		return (
			<header>
				Header
				<Menu menuItems={this.props.menuItems}/>
			</header>
		);
	}
}

export default Header;