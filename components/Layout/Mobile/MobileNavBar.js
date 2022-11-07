//NAV flex md:hidden flex-row items-center justify-around px-8 h-12 bg-white visible md:invisible fixed bottom-0 w-full rounded-t-3xl text-2xl
import NavButton from './NavButton';
import { CgMonday } from 'react-icons/cg';
import classNames from 'classnames';
import { useRouter } from 'next/router';

import React, { useState, useEffect } from 'react';
import DayNightToggle from 'react-day-and-night-toggle';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { navLinks } from '../web/data';

const MobileNavBar = () => {
	const { theme, setTheme } = useTheme();
	const [isDarkMode, setIsDarkMode] = useState();
	const router = useRouter();

	if (isDarkMode == true) {
		setTheme('dark');
	} else {
		setTheme('light');
	}
	return (
		<nav className='flex md:hidden flex-row items-center justify-around px-8 h-12 bg-white visible md:invisible fixed bottom-0 w-full rounded-t-3xl text-2xl'>
			<ul className='flex flex-row self-end h-12'>
				{navLinks.map((link, index) => {
					return (
						<Link href={link.path}>
							<li
								className='w-22 text-gray-400 hover:text-gray-700 cursor-pointer font-medium tracking-wide px-6 text-sm flex justify-center rounded-lg flex-col text-center'
								// className={` ${
								// 	link.router.pathname === link.path
								// 		? 'text-gray-700 border-b-[5px] border-gray-700 bg-gradient-to-b from-white to-gray-100 dark:from-[#222222]'
								// 		: 'w-22 text-gray-400 hover:text-gray-700 cursor-pointer font-medium tracking-widest px-2 pt-[1rem] text-sm flex items-start justify-center rounded-lg'
								// }`}
							>
								<div className='text-2xl  mx-auto'>
									{link.icon}
								</div>
								<p className='text-xs text-left'>{link.name}</p>
							</li>
						</Link>
					);
				})}
			</ul>
			<div className='bg-white dark:bg-[#222222] hover:bg-gray-50 border-2 border-gray-700 text-sm text-gray-700 p-1 my-1 rounded-3xl font-medium tracking-wide leading-none'>
				<DayNightToggle
					onChange={() => setIsDarkMode(!isDarkMode)}
					checked={isDarkMode}
					className=' '
				/>
			</div>
		</nav>
	);
};

export default MobileNavBar;
