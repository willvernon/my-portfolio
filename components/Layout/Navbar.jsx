import { CgMonday } from 'react-icons/cg';
import classNames from 'classnames';
import MenuItems from '../../data/navigation';
import { useRouter } from 'next/router';

import React, { useState, useEffect } from 'react';
import DayNightToggle from 'react-day-and-night-toggle';
import { useTheme } from 'next-themes';
import Link from 'next/link';

// import styles from "./Navbar.module.css";

const Navbar = ({ navigationData, currentRoute, setCurrentRoute }) => {
	const { theme, setTheme } = useTheme();
	const [isDarkMode, setIsDarkMode] = useState();
	const router = useRouter();

	if (isDarkMode == true) {
		setTheme('dark');
	} else {
		setTheme('light');
	}
	return (
		<nav className='hidden md:flex flex-row items-center justify-between px-8 h-18 rounded-b-3xl bg-white dark:bg-[#222222]'>
			<span className='text-5xl text-gray-700 -mb-1'>
				<CgMonday className='rotate-180' />
			</span>
			<ul className='flex flex-row self-end h-12'>
				{MenuItems.map((item, index) => {
					console.log(item.path);
					return (
						<>
							<Link href={item.path} key={index}>
								<div
									className={`w-24 h-24 text-center border-b-2 border-secondary-500  mt-3 cursor-pointer  ${
										router.asPath === item.path
											? 'text-primary-500'
											: 'text-secondary-300'
									}`}
									key={index}
									onClick={() => setCurrentRoute(item)}
								>
									{/* <div className=' hover:text-primary-500 w-10 mx-auto pb-2'>
										{item.icon}
									</div> */}

									<p className='text-secondary-300'>
										{item.label}
									</p>
								</div>
							</Link>
						</>
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
		// <nav className='hidden md:flex flex-row items-center justify-between px-8 h-18 rounded-b-3xl bg-white dark:bg-[#222222]'>
		// 	<span className='text-5xl text-gray-700 -mb-1'>
		// 		<CgMonday className='rotate-180' />
		// 	</span>
		// 	<ul className='flex flex-row self-end h-12'>
		// 		{MenuItems.map((item, index) => (
		// 			<li
		// 				className={classNames([
		// 					'w-22 text-gray-400 hover:text-gray-700 cursor-pointer font-medium tracking-widest px-2 pt-[1rem] text-sm flex items-start justify-center rounded-lg',
		// 					currentRoute === item &&
		// 						'text-gray-700 border-b-[5px] border-gray-700 bg-gradient-to-b from-white to-gray-100 dark:from-[#222222] ',
		// 				])}
		// 				key={index}

		// 			>
		// 				<Link href='/'>Home</Link>
		// 			</li>
		// 		))}
		// 	</ul>
		// 	<div className='bg-white dark:bg-[#222222] hover:bg-gray-50 border-2 border-gray-700 text-sm text-gray-700 p-1 my-1 rounded-3xl font-medium tracking-wide leading-none'>
		// 		<DayNightToggle
		// 			onChange={() => setIsDarkMode(!isDarkMode)}
		// 			checked={isDarkMode}
		// 			className=' '
		// 		/>
		// 	</div>
		// </nav>
	);
};

export default Navbar;
