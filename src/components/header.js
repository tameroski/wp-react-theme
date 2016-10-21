import React from 'react'
import { Link } from 'react-router'

import Menu from './menu'

class Header extends React.Component {
	render(){
		return (
			<header className="navbar navbar-inverse">
				<div className="container">
					<div className="navbar-header">
						<span className="navbar-brand">
							<Link to={wp.base_path}>Logo</Link>
						</span>
					</div>
					<Menu menuItems={this.props.menuItems}/>
				</div>
			</header>
		);
	}
}

export default Header;