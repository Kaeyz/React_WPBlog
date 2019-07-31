import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPost } from '../actions/postActions';
import PropTypes from 'prop-types';


import Header from './Header';
import Footer from './Footer';

class Post extends Component {
	componentDidMount() {
		this.props.getPost(this.props.slug);
	}


	renderSpinner() {
		return (
			<div className="d-flex align-items-center">
				<h3>Loading...</h3>
			</div>
		);
	}
	renderContent() {
		const { title, post_date, featured_image, content } = this.props.post;
		return (
			<div>
				<Header
					header={title.rendered.toUpperCase()}
					subHeader={`PUBLISHED ON ${post_date}`}
				/>
				<div className="container post_body">
					<img src={featured_image} className="img_fluid post_image" />
					<div dangerouslySetInnerHTML={{ __html: content.rendered }} />
				</div>

				<Footer />
			</div>
		);
	}

	render() {
		return (
			<div>
				{this.props.post.title ? this.renderContent() : this.renderSpinner()}
			</div>
		);
	}
}


Post.propTypes = {
	slug: PropTypes.string.isRequired,
	getPost: PropTypes.func.isRequired,
	post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	post: state.blog.post
});

export default connect(mapStateToProps, { getPost})(Post);