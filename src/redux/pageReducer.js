const pageReducer = (state = {
	loading: true,
	title: 'Page not found',
	content: 'Page not found'
}, action) => {
	switch (action.type){
		case "FETCH_PAGE":
			state = {
                ...state
            };
		break;
	}

	return state;
};

export default pageReducer;