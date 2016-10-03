var App = React.createClass({
	render: function() {
		return (
			<div>
				<Header menuItems={this.state.pages}/>
				<Content />
				<Footer />
			</div>
		);
	},

	componentDidMount: function() {

		// Getting Pages
		var pages = [];
		$.ajax({
            type: "GET",
            url: API_URI+"/pages",
            success: function(response){

            	for (var i = response.length - 1; i >= 0; i--) {
            		var page = response[i];

            		pages.push({
            			slug: page.slug,
            			title: page.title.rendered,
            			content: page.content.rendered,
            			uri: page.link,
            		});
            	}

		        this.setState({
		            pages: pages
		        })
            }.bind(this)
        });
	},

	getInitialState: function(){
		return {
			pages : []
		}
	},
});

var Content = React.createClass({
	render: function() {
		return (
			<main>Main</main>
		);
	}
});

var Menu = React.createClass({

	render: function() {
		var menuItems = this.props.menuItems.map(function(item) {
            return <MenuItem key={item.slug} item={item} />
        });

		return (
			<nav>
				{menuItems}
			</nav>
		);
	}
});

var MenuItem = React.createClass({
    
    render: function(){
        return (
        	<li>
        		<a href={this.props.item.uri}>
        			{this.props.item.title}
        		</a>
        	</li>
        );
    }
});

var Header = React.createClass({
	render: function() {
		return (
			<header>
				Header
				<Menu menuItems={this.props.menuItems}/>
			</header>
		);
	}
});

var Footer = React.createClass({
	render: function() {
		return (
			<footer>Footer</footer>
		);
	}
});

ReactDOM.render(
    <App />,
    document.getElementById('content')
);