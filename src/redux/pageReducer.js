const pageReducer = (state = {
	loading: true,
	currentSlug: '',
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

    return state;
};

export default pageReducer;