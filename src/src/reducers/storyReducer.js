const initialState = { data: [], dataFetched: false, isFetching: false, error: false, current: []};

function storyReducer(state=initialState, action){
	switch(action.type) {
		case "FETCHING_DATA_SUCCESS": 
			return {
				...state,
				fetching: false,
				data: action.data
			}
		case "FETCHED_SINGLE_STORY":
			return {
				...state,
				fetching: false,
				current: action.data
			}
			
		default: 
			return state;

	}
}


export default storyReducer;