import $ from 'jquery';

export function fetchPage(slug){
	return {
        type: "FETCH_PAGE",
        payload: new Promise((resolve, reject) => {

            // Looking for id within routes
            var id = 0
            for (var i = wp.routes.length - 1; i >= 0; i--) {
                if (wp.routes[i].slug == slug){
                    id = wp.routes[i].id
                    break
                }
            }

            //setTimeout( () => {
            	$.ajax({
	                type: "GET",
	                url: wp.root+"wp/v2/pages/"+id,
	                success: function(response){

						resolve({
	                        title : response.title.rendered,
	                        content : response.content.rendered,
	                        slug: slug
						})

	                },
	                error: function(){

						resolve({
	                        title : 'Page not found',
	                        content : 'Page not found',
	                        slug: slug
						})
	                }
	            });
            //}, 2000);

        })
    };
}

export function loading(){
	return {
        type: "LOADING_PAGE",
        payload: {}
    };
}