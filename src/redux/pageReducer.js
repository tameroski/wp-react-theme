const pageReducer = (state = {
	loading: true,
	slug: '',
	title: 'Page not found',
	content: 'Page not found'
}, action) => {
	switch (action.type){
		case "FETCH_PAGE_FULFILLED":
            state = {
                ...state,
                loading: false,
                ...action.payload
	        };
		break;
	}
	switch (action.type){
		case "LOADING_PAGE":
            state = {
                ...state,
                loading: true
	        };
		break;
	}

    return state;
};

export default pageReducer;