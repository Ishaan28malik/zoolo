import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import storyReducer from './reducers/storyReducer';
import userReducer from './reducers/userReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const mainReducer = combineReducers({ storyReducer, userReducer });
const store = createStore(mainReducer, composeWithDevTools(
														applyMiddleware(thunk)
													)
												);


export default store;