import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
// import { useRouter } from 'next/router';
import DayNightToggle from 'react-day-and-night-toggle';
import { useTheme } from 'next-themes';
import classes from '../Layout/NewNavbar.module.css';

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
		<header class={classes.header}>
			<div class={classes.corner}></div>

			<nav class={classes.nav} className='ml-[5p] '>
				<svg class={classes.svg} viewBox='0 0 2 3' aria-hidden='true'>
					<path
						class={classes.path}
						d='M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z'
					/>
				</svg>
				<ul class={classes.ul} className=''>
					<li class={classes.li} className=' text-sm hover:border-b'>
						<Link class={classes.a} href='/'>
							Home
						</Link>
					</li>
					<li class={classes.li} className=' text-sm  hover:border-b'>
						<Link class={classes.a} href='/#projects'>
							Projects
						</Link>
					</li>
					<li class={classes.li} className=' text-sm  hover:border-b'>
						<Link class={classes.a} href='/resume'>
							Resume
						</Link>
					</li>
					<li class={classes.li} className=' text-sm  hover:border-b'>
						<Link class={classes.a} href='/#contact'>
							My Info
						</Link>
					</li>
				</ul>
				<svg class={classes.svg} viewBox='0 0 2 3' aria-hidden='true'>
					<path
						class={classes.path}
						d='M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z'
					/>
				</svg>
			</nav>

			<div className='fixed -ml-12 mr-12 invisible md:visible'>
				<DayNightToggle
					onChange={() => setIsDarkMode(!isDarkMode)}
					checked={isDarkMode}
					className='mt-2.5 ml-4'
				/>
				{/* TODO put something else here? github link? */}
			</div>
		</header>
	);
};

export default NewNavbar;
