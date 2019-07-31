import React from 'react';
import PropTypes from 'prop-types';

import Post from '../components/Post';

export default function PostPage(props) {
	return (
		<div>
			<Post slug={props.match.params.slug}/>
		</div>
	);
}

PostPage.propTypes = {
	match: PropTypes.object.isRequired,
};
