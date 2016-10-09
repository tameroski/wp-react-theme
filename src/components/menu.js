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
        		<a href={this.props.item.slug} dangerouslySetInnerHTML={{__html: this.props.item.title}}></a>
        	</li>
        );
    }
}

export default Menu;