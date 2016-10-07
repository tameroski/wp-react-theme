import React from 'react';

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
        		<a href={this.props.item.uri} dangerouslySetInnerHTML={{__html: this.props.item.title}}></a>
        	</li>
        );
    }
}

export default Menu;