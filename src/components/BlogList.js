import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from '../actions/postActions';

import PostCard from './PostCard';
import Pagination from './Pagination';


class BlogList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPage: 1,
			limit: 6
		};
	}

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
		const { limit, currentPage } = this.state;
		const posts = this.props.blog.posts;

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
						{selected.filter(post=> post !== undefined ).map((post, key) => (
							<PostCard
								key={key}
								excerpt={post.excerpt.rendered}
								image={post.featured_image_thumbnail}
								title={post.title.rendered}
							/>
						))}
					</div>
					<Pagination
						currentPage={this.state.currentPage}
						pages={this.props.pages}
						nexPage={this.nextPage}
						prevPage={this.prevPage}
					/>
				</div>
			);
		} else {
			return (<h4>No posts available</h4>);
		}
	}

	nextPage() {
		if (this.state.currentPage < this.props.pages) {
			this.setState({ currentPage: this.state.currentPage + 1 });
		}
	}

	prevPage() {
		if (this.state.currentPage > 1) {
			this.setState({ currentPage: this.state.currentPage - 1 });
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
	pages: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
	blog: state.blog,
	pages: Math.ceil(state.blog.posts.length / 6)
});

export default connect(mapStateToProps, { getPosts })(BlogList);