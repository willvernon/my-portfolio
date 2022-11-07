
import { CgMonday } from 'react-icons/cg';
import classNames from 'classnames';
import { useRouter } from 'next/router';

import React, { useState, useEffect } from 'react';
import DayNightToggle from 'react-day-and-night-toggle';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { navLinks } from './data';

const NavBar = () => {
	const { theme, setTheme } = useTheme();
	const [isDarkMode, setIsDarkMode] = useState();
	const router = useRouter();

	if (isDarkMode == true) {
		setTheme('dark');
	} else {
		setTheme('light');
	}
	return (
		<nav className='hidden md:flex flex-row items-center justify-around  h-18 rounded-b-3xl bg-white dark:bg-[#222222]'>
			<span className='text-5xl text-gray-700'>
				<CgMonday className='rotate-180' />
			</span>
			<ul className='flex flex-row self-end h-12'>
				{navLinks.map((link, index) => {
					return (
						<Link href={link.path}>
							<li
								className='w-22 text-gray-400 hover:text-gray-700 cursor-pointer font-medium tracking-wide px-4 text-sm flex items-center justify-center rounded-lg'
								// className={` ${
								// 	link.router.pathname === link.path
								// 		? 'text-gray-700 border-b-[5px] border-gray-700 bg-gradient-to-b from-white to-gray-100 dark:from-[#222222]'
								// 		: 'w-22 text-gray-400 hover:text-gray-700 cursor-pointer font-medium tracking-widest px-2 pt-[1rem] text-sm flex items-start justify-center rounded-lg'
								// }`}
								key={index}
							>
								{link.name}
								{/* <span className='text-secondary-300'>
									{link.label}
								</span> */}
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

export default NavBar;
