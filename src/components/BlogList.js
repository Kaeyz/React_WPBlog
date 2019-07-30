import React, { Component } from 'react';

export default class BlogList extends Component {
	render() {
		return (
			<div className='container'>
				<div className='blog'>

					<div className="card">
						<img src="..." className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">Some quick example text to build on the card title and make up the bulk of the content.</p>
						</div>
					</div>

				</div>
				<div className='pg-container'>
					<nav>
						<ul className="pagination">
							<li className="page-item"><a className="page-link" href="/">Previous</a></li>
							<li className="page-item"><a className="page-link" href="/">1</a></li>
							<li className="page-item"><a className="page-link" href="/">2</a></li>
							<li className="page-item"><a className="page-link" href="/">3</a></li>
							<li className="page-item"><a className="page-link" href="/">Next</a></li>
						</ul>
					</nav>
				</div>

			</div>
		);
	}
}
