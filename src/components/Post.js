import React from 'react';

import Header from './Header';
import Footer from './Footer';

export default function Post() {
	return (
		<div>
			<Header
				header="Post header"
				subHeader="this is a sub header"
			/>
			<div>this is the post</div>

			<Footer />
		</div>
	);
}
