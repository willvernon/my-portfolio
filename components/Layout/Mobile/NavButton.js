// components/NavButton.js

import Link from 'next/link';
import { withRouter } from 'next/router';

const NavButton = (props) => (
	<Link href={props.path}>
		<div
			className={`text-sm text-gray-400 hover:text-gray-700 cursor-pointer w-8 h-full flex items-center justify-center px-8 ${
				props.router.pathname === props.path
					? 'bg-gradient-to-t from-white to-gray-100 border-t-4 border-gray-700 text-gray-700 rounded-lg px-6'
					: ''
			}`}
		>
			<div className='text-sm'>{props.icon}</div>
			<span className='text-sm text-gray-400 hover:text-gray-700 cursor-pointer w-8 h-full flex items-center justify-center px-6'>
				{props.label}
			</span>
		</div>
	</Link>
);

export default withRouter(NavButton);
