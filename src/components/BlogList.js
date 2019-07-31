import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts, nextPage, prevPage } from '../actions/postActions';

import PostCard from './PostCard';
import Pagination from './Pagination';


class BlogList extends Component {

	componentDidMount() {
		this.props.getPosts();
	}



	renderSpinner() {
		return (
			<div className="d-flex align-items-center">
				<h3>Loading...</h3>
			</div>
		);
	}





	renderPosts() {
		const { limit, currentPage, posts } = this.props.blog;

		if (this.props.blog.posts.length > 0) {
			const selected = [];
			const start = (currentPage * limit) - limit;
			const stop = start + limit - 1;
			for (let i = start; i <= stop; i++) {
				selected.push(posts[i]);
			}

			return (
				<div>
					<div className='blog'>
						{selected.filter(post => post !== undefined).map((post, key) => (
							<PostCard
								key={key}
								excerpt={post.excerpt.rendered}
								image={post.featured_image_thumbnail}
								title={post.title.rendered}
								link={`/blog/${post.slug}`}
							/>
						))}
					</div>
					<Pagination
						currentPage={this.props.blog.currentPage}
						pages={this.props.blog.pages}
						ClickNextPage={this.props.nextPage}
						ClickPrevPage={this.props.prevPage}
					/>
				</div>
			);
		} else {
			return (<h4>No posts available</h4>);
		}
	}



	render() {
		return (
			<div className='container'>
				{this.props.blog.loading ? this.renderSpinner() : this.renderPosts()}
			</div>
		);
	}
}

BlogList.propTypes = {
	getPosts: PropTypes.func.isRequired,
	blog: PropTypes.object.isRequired,
	prevPage: PropTypes.func.isRequired,
	nextPage: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	blog: state.blog
});

export default connect(mapStateToProps, { getPosts, prevPage, nextPage })(BlogList);