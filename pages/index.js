import Head from 'next/head';
import React from 'react';
//Navigation
import { FaDev } from 'react-icons/fa';
import navButtons from '../components/Layout/web/data';
// import Layout from '../components/Mobile/Layout';
// import WebLayout from '../components/Layout/web/WebLayout';
import MobileNavBar from '../components/Layout/Mobile/MobileNavBar';
import NavBar from '../components/Layout/web/NavBar';

// Pages
import Main from '../components/Main';
import About from '../components/About';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
export default function Home() {
	// const { currentRoute, setCurrentRoute } = useNavigation();

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
				<NavBar />
				<MobileNavBar />
				{/* DevLogo */}
				<div className='flex items-center justify-center text-5xl text-gray-300 h-5/6'>
					<FaDev />
				</div>
			</div>

			{/* <Main /> */}
			{/* <About /> */}
			{/* <Skills /> */}
			{/* <Projects /> */}
			{/* <Contact /> */}
		</div>
	);
}
