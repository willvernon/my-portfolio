import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
// import { useRouter } from 'next/router';
import NavLogo from '../public/assets/MeMoji-Mac.png';

const NewNavbar = () => {
	const [nav, setNav] = useState(false);
	const [shadow, setShadow] = useState(false);
	const [navBg, setNavBg] = useState('#222222');
	const [linkColor, setLinkColor] = useState('#F7F7F7');
	// const [position, setPosition] = useState('fixed')
	// const router = useRouter();

	// useEffect(() => {
	//   if (
	//     router.asPath === '/property' ||
	//     router.asPath === '/crypto' ||
	//     router.asPath === '/netflix' ||
	//     router.asPath === '/twitch'
	//   ) {
	//     setNavBg('transparent');
	//     setLinkColor('#ecf0f3');
	//   } else {
	//     setNavBg('#ecf0f3');
	//     setLinkColor('#1f2937');
	//   }
	// }, [router]);

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

	return (
		<header className='fixed top-0 w-screen'>
			<div class='corner'></div>

			<nav>
				<svg viewBox='0 0 2 3' aria-hidden='true'>
					<path d='M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z' />
				</svg>
				<ul
					className={
						shadow
							? 'shadow-xl z-[100] ease-in-out duration-300'
							: '  z-[100]'
					}
				>
					<li className='ml-2 text-sm  hover:border-b'>
						<Link href='/'>Home</Link>
					</li>
					<li className='ml-2 text-sm  hover:border-b'>
						<Link href='/#projects'>Projects</Link>
					</li>
					<li className='ml-2 text-sm  hover:border-b'>
						<Link href='/resume'>Resume</Link>
					</li>
					<li className='ml-2 text-sm  hover:border-b'>
						<Link href='/#contact'>Contact</Link>
					</li>
				</ul>
				<svg viewBox='0 0 2 3' aria-hidden='true'>
					<path d='M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z' />
				</svg>
			</nav>

			<div class='corner'>
				{/* TODO put something else here? github link? */}
			</div>
		</header>
	);
};

export default NewNavbar;
