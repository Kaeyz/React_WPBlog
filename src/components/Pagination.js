import React from 'react';
import PropTypes from 'prop-types';


export default function Pagination({ClickNextPage, ClickPrevPage, pages, currentPage}) {
	return (
		<div className='pg-container'>
			<nav>
				<ul className="pagination">
					<li className="page-item">
						<button
							className={`btn ${currentPage <= 1 ? 'btn-light' : 'btn-info'}`}
							onClick={ currentPage <= 1 ? '' : ClickPrevPage }
						>
							Prev
						</button>
					</li>

					<li className="page-item">
						<button
							className={`btn ${currentPage >= pages ? 'btn-light' : 'btn-info'}`}
							onClick={currentPage >= pages ? '' : ClickNextPage}
						>
							Next
						</button>
					</li>
				</ul>
			</nav>
		</div>
	);
}

Pagination.propTypes = {
	pages: PropTypes.number.isRequired,
	currentPage: PropTypes.number.isRequired,
	ClickNextPage: PropTypes.func.isRequired,
	ClickPrevPage: PropTypes.func.isRequired,
};