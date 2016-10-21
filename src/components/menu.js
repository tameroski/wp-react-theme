import React from 'react';

import MenuItem from './menuItem';

class Menu extends React.Component {
	render(){
		
		var menuItems = this.props.menuItems.map(function(item) {
            return <MenuItem key={item.id} item={item} />
        });

		return (
			<nav className="navbar-right">
				<ul className="nav navbar-nav">
					{menuItems}
				</ul>
			</nav>
		);
	}
}

export default Menu;