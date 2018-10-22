const initialState = { country: 'India', lan: 'en', ageGp: '10-12' };

function storyReducer(state=initialState, action){
	switch(action.type) {
		case "SET_DATA": 
			return {...state, country: action.data.country, lan: action.data.lan, ageGp: action.data.ageGp}
		default: 
			return state;
	}
}


export default storyReducer;