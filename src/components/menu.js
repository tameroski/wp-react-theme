import React from 'react';
import { Link } from 'react-router'

class Menu extends React.Component {
	render(){
		
		var menuItems = this.props.menuItems.map(function(item) {
            return <MenuItem key={item.slug} item={item} />
        });

		return (
			<nav>
				{menuItems}
			</nav>
		);
	}
}

class MenuItem extends React.Component {

    render(){
        return (
        	<li>
        		<Link to={wp.base_path + this.props.item.slug} dangerouslySetInnerHTML={{__html: this.props.item.title}}></Link>
        	</li>
        );
    }
}

export default Menu;