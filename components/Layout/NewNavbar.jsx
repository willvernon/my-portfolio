import Link from 'next/link';
import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
import DayNightToggle from 'react-day-and-night-toggle';
import { useTheme } from 'next-themes';

const NewNavbar = () => {
	const [nav, setNav] = useState(false);
	const [shadow, setShadow] = useState(false);
	const [navBg, setNavBg] = useState('#222222');
	const [linkColor, setLinkColor] = useState('#F7F7F7');

	const handleNav = () => {
		setNav(!nav);
	};

	useEffect(() => {
		const handleShadow = () => {
			if (window.scrollY >= 90) {
				setShadow(true);
			} else {
				setShadow(false);
			}
		};
		window.addEventListener('scroll', handleShadow);
	}, []);

	const { theme, setTheme } = useTheme();
	const [isDarkMode, setIsDarkMode] = useState();

	if (isDarkMode == true) {
		setTheme('dark');
	} else {
		setTheme('light');
	}
	console.log(useTheme);

	return (
		<header className='flex justify-between invisible md:visible'>
			<div className='block w-16 h-12'></div>

			<nav className='flex justify-center  ml-[5p] '>
				<svg
					className='w-8 h-12 block overflow-hidden '
					viewBox='0 0 2 3'
					aria-hidden='true'
				>
					<path
						className='fill-white'
						d='M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z'
					/>
				</svg>
				<ul className='flex relative justify-center items-center bg-white bg-contain p-0 m-0 h-12'>
					<li className=' relative px-2 text-sm hover:border-t dark:text-black '>
						<Link href='/'>Home</Link>
					</li>
					<li className=' relative px-2 text-sm hover:border-t dark:text-black '>
						<Link href='/#projects'>Projects</Link>
					</li>
					<li className=' relative px-2 text-sm hover:border-t dark:text-black '>
						<Link href='/resume'>Resume</Link>
					</li>
					<li className=' relative px-2 text-sm hover:border-t dark:text-black '>
						<Link href='/#contact'>My Info</Link>
					</li>
				</ul>
				<svg
					className='w-8 h-12 block overflow-hidden'
					viewBox='0 0 2 3'
					aria-hidden='true'
				>
					<path
						className='fill-white'
						d='M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z'
					/>
				</svg>
			</nav>

			<div className=' invisible md:visible  w-24 h-12'>
				<DayNightToggle
					onChange={() => setIsDarkMode(!isDarkMode)}
					checked={isDarkMode}
					className='mt-2.5 ml-4 flex align-center justify-center w-[100%] h-[100%] '
				/>
				{/* TODO put something else here? github link? */}
			</div>
		</header>
		
	);
};

export default NewNavbar;
