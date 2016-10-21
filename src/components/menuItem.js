import React from 'react';
import { Link } from 'react-router';

class MenuItem extends React.Component {

    render(){
        return (
        	<li>
        		<Link to={wp.base_path + this.props.item.slug} dangerouslySetInnerHTML={{__html: this.props.item.title}} activeClassName="active"></Link>
        	</li>
        );
    }
}

export default MenuItem;