import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import sneakerx from '../public/assets/projects/Sneakerx.png';
import Demo from '../public/assets/projects/Demo.png'
import NHASH from '../public/assets/projects/NHASH.png'
import BBLGx from '../public/assets/projects/bblgx.png'
import Scientia from '../public/assets/projects/scientia.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
		<div id='projects' className='w-full'>
			<div className='max-w-[1240px] mx-auto px-10 py-16'>
				<h1 className='text-4xl tracking-wide uppercase text-[#F12307]'>
					Projects
				</h1>
				<h3 className='py-4 text-xl text-gray-700 dark:text-white'>
					Some Things I&apos;ve Built
				</h3>
				<div className='grid md:grid-cols-2 gap-8 '>
					<ProjectItem
						title='SneakerX'
						backgroundImg={sneakerx}
						projectUrl='/sneakerx'
						tech='React JS'
					/>
					<ProjectItem
						title='Big Bison Intranet'
						backgroundImg={Demo}
						projectUrl='/BBI'
						tech='React JS'
					/>
					<ProjectItem
						title='NHASH App'
						backgroundImg={NHASH}
						projectUrl='/nhash'
						tech='React JS'
					/>
					<ProjectItem
						title='Scientia App'
						backgroundImg={Scientia}
						projectUrl='/scientia'
						tech='Next JS'
					/>
					<ProjectItem
						title='BBLGX Website'
						backgroundImg={BBLGx}
						projectUrl='/BBLGx'
						tech='Next JS'
					/>
					<ProjectItem
						title='BBLGX Website'
						backgroundImg={BBLGx}
						projectUrl='/BBLGx'
						tech='Next JS'
					/>
				</div>
			</div>
		</div>
  );
};

export default Projects;