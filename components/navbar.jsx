import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
// import { useRouter } from 'next/router';
import NavLogo from "../public/assets/MeMoji-Mac.png";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [shadow, setShadow] = useState(false);
	const [navBg, setNavBg] = useState("#222222");
	const [linkColor, setLinkColor] = useState("#F7F7F7");
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

	

	return (
		<div
			style={{ backgroundColor: `${navBg}` }}
			className={
				shadow
					? "fixed w-full h-12 shadow-xl z-[100] ease-in-out duration-300"
					: "fixed w-full h-12 z-[100]"
			}>
			<div className='flex justify-between items-center w-full h-full px-8 2xl:px-16'>
				<Link href='/'>
					<a>
						<Image
							src={NavLogo}
							alt='/'
							width='50%'
							height='50%'
							className='cursor-pointer'
						/>
					</a>
					
				</Link>
				<div>
					
					{/* Hamburger Icon */}
					<div
						style={{ color: `${linkColor}` }}
						onClick={handleNav}
						className='md:hidden'>
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{/* Overlay */}
			<div
				className={
					nav ? "md:hidden fixed right-0 top-0 w-full h-screen bg-[#222222]]" : ""
				}>
				{/* Side Drawer Menu */}
				<div
					className={
						nav
							? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#F7F7F7] p-10 ease-in duration-500"
							: "fixed left-[-100%] top-0 p-10 ease-in duration-500"
					}>
					<div>
						<div className='flex w-full items-center justify-between'>
							<Link href='/'>
								<a>
									<Image src={NavLogo} width='87' height='35' alt='/' />
								</a>
							</Link>
							<div
								onClick={handleNav}
								className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
								<AiOutlineClose />
							</div>
						</div>
						<div className='border-b border-gray-300 my-4'>
							<p className='w-[85%] md:w-[90%] py-4'>
								Let&#39;s build something legendary together
							</p>
						</div>
					</div>
					<div className='py-4 flex flex-col'>
						<ul className='uppercase'>
							<Link href='/'>
								<li onClick={() => setNav(false)} className='py-4 text-sm'>
									Home
								</li>
							</Link>
							<Link href='/#about'>
								<li onClick={() => setNav(false)} className='py-4 text-sm'>
									About
								</li>
							</Link>
							<Link href='/#skills'>
								<li onClick={() => setNav(false)} className='py-4 text-sm'>
									Skills
								</li>
							</Link>
							<Link href='/#projects'>
								<li onClick={() => setNav(false)} className='py-4 text-sm'>
									Projects
								</li>
							</Link>
							<Link href='/resume'>
								<li onClick={() => setNav(false)} className='py-4 text-sm'>
									Resume
								</li>
							</Link>
							<Link href='/#contact'>
								<li onClick={() => setNav(false)} className='py-4 text-sm'>
									Contact
								</li>
							</Link>
						</ul>
						<div className='pt-40'>
							<p className='uppercase tracking-widest text-[#F7F7F7]'>
								Let&#39;s Connect
							</p>
							<div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
								<a
									href='https://www.linkedin.com/in/clint-briley-50056920a/'
									target='_blank'
									rel='noreferrer'>
									<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
										<FaLinkedinIn />
									</div>
								</a>
								<a
									href='https://github.com/fireclint'
									target='_blank'
									rel='noreferrer'>
									<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
										<FaGithub />
									</div>
								</a>
								<Link href='/#contact'>
									<div
										onClick={() => setNav(!nav)}
										className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
										<AiOutlineMail />
									</div>
								</Link>
								<Link href='/resume'>
									<div
										onClick={() => setNav(!nav)}
										className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
										<BsFillPersonLinesFill />
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
