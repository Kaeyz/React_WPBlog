import React, { Component } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogList from '../components/BlogList';

export default class Home extends Component {
	render() {
		return (
			<div>
				<Header />
				<BlogList />
				<Footer />
			</div>
		);
	}
}
