import Head from 'next/head';
import About from '../components/About';
import Contact from '../components/Contact';
import Main from '../components/Main';
import NavBar from '../components/Navbar';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import NewNavbar from '../components/Layout/NewNavbar';


export default function Home() {
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
			{/* <NavBar /> */}
			<NewNavbar />
			{/* <Main /> */}
			{/* <About /> */}
			{/* <Skills /> */}
			{/* <Projects /> */}
			{/* <Contact /> */}
		</div>
	);
}
