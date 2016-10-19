import $ from 'jquery'

export function fetchPage(slug){
	return dispatch => {
        setTimeout(() => {

			if (slug != ''){

	            // Looking for id within routes
	            var id = 0
	            for (var i = wp.routes.length - 1; i >= 0; i--) {
	                if (wp.routes[i].slug == slug){
	                    id = wp.routes[i].id
	                    break
	                }
	            }

	            console.log("fetchPage : " + slug);

	            $.ajax({
	                type: "GET",
	                url: wp.root+"wp/v2/pages/"+id,
	                success: function(response){

						dispatch({
							type: "FETCH_PAGE",
							payload: {
		                        loading: false,
		                        title : response.title.rendered,
		                        content : response.content.rendered
		                    }
						});

	                },
	                error: function(){

						dispatch({
							type: "FETCH_PAGE",
							payload: {
		                        loading: false,
		                        title : 'Page not found',
		                        content : 'Page not found'
		                    }
						});
	                }
	            });
	        }

		}, 2000);
    }
}