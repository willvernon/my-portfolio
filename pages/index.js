import Head from 'next/head';
import React from 'react';
//Navigation
import { FaDev } from 'react-icons/fa';
import useNavigation from '../hooks/useNavigation';
import navigationData from '../data/navigation';
import Navbar from '../components/Layout/Navbar';

// Pages
import Main from '../components/Main';
import About from '../components/About';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Layout from '../components/Layout/Mobile/Layout';
export default function Home() {
	const { currentRoute, setCurrentRoute } = useNavigation();

	return (
		<div>
			<Head>
				<title>Will | Front-End Developer</title>
				<meta
					name='description'
					content='I’m a front-end web developer specializing in building (and designing) exceptional digital experiences.'
				/>
				<link rel='icon' href='/assets/MeMoji-Mac.png' />
			</Head>
			{/* Container */}
			<div className='bg-gray-200 h-screen'>
				<Navbar
					navigationData={navigationData}
					currentRoute={currentRoute}
					setCurrentRoute={setCurrentRoute}
				/>

				{/* DevLogo */}
				<div className='flex items-center justify-center text-5xl text-gray-300 h-5/6'>
					<FaDev />
				</div>
			</div>
			<Layout />
			{/* <Main /> */}
			{/* <About /> */}
			{/* <Skills /> */}
			{/* <Projects /> */}
			{/* <Contact /> */}
		</div>
	);
}
