import axios from 'axios';

import { GET_POSTS, POST_LOADING, NEXT_PAGE, PREV_PAGE, GET_POST } from './types';

// Get Posts
export const getPosts = () => dispatch => {
	dispatch({ type: POST_LOADING });
	axios
		.get('https://epower.ng/wp-json/wp/v2/posts')
		.then(res => {
			dispatch({
				type: GET_POSTS,
				payload: [...res.data]
			});
		})
		.catch(err => console.error(err));
};

export const getPost = (slug) => (dispatch) => {
	dispatch({ type: POST_LOADING });
	axios
		.get('https://epower.ng/wp-json/wp/v2/posts')
		.then(res => {
			dispatch({
				type: GET_POSTS,
				payload: [...res.data]
			});
			dispatch({
				type: GET_POST,
				payload: slug
			});
		})
		.catch(err => console.error(err));
};

export const nextPage = () => {
	return {
		type: NEXT_PAGE
	};
};


export const prevPage = () => {
	return {
		type: PREV_PAGE
	};
};
