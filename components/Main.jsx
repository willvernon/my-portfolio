import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import DayNightToggle from 'react-day-and-night-toggle';

const Main = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);
	return (
		<div className='w-full h-screen text-center'>
			<div className='max-w-[1240] w-full h-full mx-auto p-2 flex justify-center items-center'>
				<div>
					<h1 className='py-4 text-[#F7F7F7]'>
						Hi! I'm{' '}
						<span className='text-[#e64c33]'>Will Vernon</span>
					</h1>
					<h2 className='py-4 text-gray-400'>
						A Front-End Web Developer
					</h2>
					{/* <p className='py-4 text-[#F7F7F7] max-w-[70%] m-auto'>
						{" "}
						I'm a front-end web developer specializing in building (and
						designing) exceptional digital experiences. Currently, I'm focused
						on building responsive front-end web applications while sharpening
						my design processes.{" "}
					</p> */}
					<Typewriter
						options={{
							strings: [
								'Im a front-end web developer',
								'I like to design things.',
								'I love learning new tech.',
								'I like to build awesome stuff.',
								'I love to code.',
							],
							autoStart: true,
							loop: true,
							deleteSpeed: 10,
							cursor: '<',
							delay: 100,
						}}
					/>
					

					<div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
						<div className='rounded-full shadow-md shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
							<FaLinkedinIn />
						</div>
						<div className='rounded-full shadow-md shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
							<FaGithub />
						</div>
						<div className='rounded-full shadow-md shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
							<AiOutlineMail />
						</div>
						<div className='rounded-full shadow-md shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
							<BsFillPersonLinesFill />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
