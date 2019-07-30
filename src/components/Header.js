import React from 'react';
import PropTypes from 'prop-types';


export default function Header({header, subHeader}) {
	return (
		<div className='container-fluid bg-info header'>
			<h2 className="header_text">{header}</h2>
			<p>{subHeader}</p>
		</div>
	);
}

Header.propTypes = {
	header: PropTypes.string.isRequired,
	subHeader: PropTypes.string
};