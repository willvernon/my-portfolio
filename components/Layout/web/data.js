import NavLink from './NavLink.js';
import { AiFillHome } from 'react-icons/ai';
import { BsFillBagFill, BsFillPersonFill } from 'react-icons/bs';
import { CgInbox, CgWebsite } from 'react-icons/cg';

export const navLinks = [
			{ name: 'Home', path: '/', icon: <AiFillHome /> },
			{
				name: 'About',
				path: '/about',
				icon: <BsFillPersonFill />,
			},
			{
				name: 'Projects',
				path: '/projects',
				icon: <CgWebsite />,
			},
			{
				name: <NavLink item='Contact' />,
				path: '#contact',
				icon: <CgInbox />,
			},
		];
