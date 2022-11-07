import Head from 'next/head';

import NavBar from './NavBar';

import navButtons from './buttons';

const Layout = (props) => {
	const appTitle = `>Portfolio`;

	return (
		<div className='Layout'>
			<div className='Content'>{props.children}</div>
			<NavBar navButtons={navButtons} />
		</div>
	);
};

export default Layout;
