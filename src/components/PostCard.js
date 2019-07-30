import React from 'react';
import PropTypes from 'prop-types';

export default function PostCard({key, image, title, excerpt}) {
	return (
		<div className="card" key={key}>
			<img src={`${image}`} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{excerpt}</p>
			</div>
		</div>
	);
}


PostCard.propTypes = {
	image: PropTypes.string.isRequired,
	key: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	excerpt: PropTypes.string.isRequired
};