import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';


// components
import Home from './pages/Home';
import PostPage from './pages/PostPage';


class Router extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Route exact path='/' component={Home} />
					<Route exact path='/blog' component={Home} />
					<Route exact path="/blog/:slug" component={PostPage} />
				</div>
			</BrowserRouter>
		);
	}
}

export default Router;