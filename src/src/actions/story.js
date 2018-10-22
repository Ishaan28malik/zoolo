import { getAllData, get } from '../api';

export function gotStories(data) {
	return {
		type: "FETCHING_DATA_SUCCESS", 
		data: data
	}
}

export function getStories(lan, cat) {
	return (dispatch) => {
		var data = getAllData(lan, cat);
		dispatch(gotStories(data));
	}
}


export function gotStory(data) {
	return {
		type: "FETCHED_SINGLE_STORY",
		data: data
	}
}

export function getStory(id, lan, cat) {
	return (dispatch) => {
		var data = get(id, lan, cat);
		dispatch(gotStory(data));
	}
}