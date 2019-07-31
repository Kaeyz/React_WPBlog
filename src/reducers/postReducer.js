import {
	GET_POSTS, POST_LOADING, GET_POST, PREV_PAGE, NEXT_PAGE
} from '../actions/types';

const initialState = {
	posts: [],
	post: {},
	loading: false,
	currentPage: 1,
	limit: 6,
	pages: null
};


export default (state = initialState, action) => {
	switch (action.type) {
	case POST_LOADING:
		return {
			...state,
			loading: true
		};
	case GET_POSTS:
		return {
			...state,
			posts: action.payload,
			pages: Math.ceil(action.payload.length / state.limit),
			currentPage: 1,
			loading: false
		};
	case GET_POST:
		return {
			...state,
			post: action.payload,
			loading: false
		};
	case NEXT_PAGE:
		return {
			...state,
			currentPage: state.currentPage + 1
		};
	case PREV_PAGE:
		return {
			...state,
			currentPage: state.currentPage - 1
		};
	default:
		return state;
	}
};