import Image from "next/image";
import React from "react";
import Html from "../public/assets/skills/html.png";
import Css from "../public/assets/skills/css.png";
import Javascript from "../public/assets/skills/javascript.png";
import ReactImg from "../public/assets/skills/react.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import Github from "../public/assets/skills/github1.png";
import Firebase from "../public/assets/skills/firebase.png";
import NextJS from "../public/assets/skills/nextjs.png";
import AWS from "../public/assets/skills/aws.png";

const Skills = () => {
	return (
		<div id='skills' className='w-full lg:h-screen p-10'>
			<div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
				<h1 className='text-4xl tracking-wide uppercase text-[#F12307]'>
					Skills
				</h1>
				<p className='text-xl py-4 text-gray-700 dark:text-white'>
					What I Can Do
				</p>
				<div className='grid grid-cols-2 lg:grid-cols-4 gap-8 '>
					<div className='p-6 shadow-xl shadow-[#7c7c7c] dark:shadow-[#404040] rounded-xl hover:scale-105 ease-in duration-300 bg-gray-600 dark:bg-gray-300  '>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={Html}
									width='64px'
									height='64px'
									alt='/'
								/>
							</div>
							<div className='flex flex-col items-center justify-center dark:text-gray-700 text-white'>
								<p className='text-2xl'>HTML</p>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-xl shadow-[#7c7c7c] dark:shadow-[#404040] rounded-xl hover:scale-105 ease-in duration-300 bg-gray-600 dark:bg-gray-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={Css}
									width='64px'
									height='64px'
									alt='/'
								/>
							</div>
							<div className='flex flex-col items-center justify-center dark:text-gray-700 text-white'>
								<p className='text-2xl'>CSS</p>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-xl shadow-[#7c7c7c] dark:shadow-[#404040] rounded-xl hover:scale-105 ease-in duration-300 bg-gray-600 dark:bg-gray-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={Javascript}
									width='64px'
									height='64px'
									alt='/'
								/>
							</div>
							<div className='flex flex-col items-center justify-center dark:text-gray-700 text-white'>
								<p className='text-2xl'>JavaScript</p>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-xl shadow-[#7c7c7c] dark:shadow-[#404040] rounded-xl hover:scale-105 ease-in duration-300 bg-gray-600 dark:bg-gray-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={ReactImg}
									width='64px'
									height='64px'
									alt='/'
								/>
							</div>
							<div className='flex flex-col items-center justify-center dark:text-gray-700 text-white'>
								<p className='text-2xl'>React</p>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-xl shadow-[#7c7c7c] dark:shadow-[#404040] rounded-xl hover:scale-105 ease-in duration-300 bg-gray-600 dark:bg-gray-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={Tailwind}
									width='64px'
									height='64px'
									alt='/'
								/>
							</div>
							<div className='flex flex-col items-center justify-center dark:text-gray-700 text-white'>
								<p className='text-2xl'>Tailwind</p>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-xl shadow-[#7c7c7c] dark:shadow-[#404040] rounded-xl hover:scale-105 ease-in duration-300 bg-gray-600 dark:bg-gray-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={Firebase}
									width='64px'
									height='64px'
									alt='/'
								/>
							</div>
							<div className='flex flex-col items-center justify-center dark:text-gray-700 text-white'>
								<p className='text-2xl'>Firebase</p>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-xl shadow-[#7c7c7c] dark:shadow-[#404040] rounded-xl hover:scale-105 ease-in duration-300 bg-gray-600 dark:bg-gray-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={Github}
									width='64px'
									height='64px'
									alt='/'
								/>
							</div>
							<div className='flex flex-col items-center justify-center dark:text-gray-700 text-white'>
								<p className='text-2xl'>Github</p>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-xl shadow-[#7c7c7c] dark:shadow-[#404040] rounded-xl hover:scale-105 ease-in duration-300 bg-gray-600 dark:bg-gray-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={NextJS}
									width='64px'
									height='64px'
									alt='/'
								/>
							</div>
							<div className='flex flex-col items-center justify-center dark:text-gray-700 text-white'>
								<p className='text-2xl'>Next</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
