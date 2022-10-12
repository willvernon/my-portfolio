import React from "react";

const about = () => {
	return (
		<div className='w-full md:h-screen p-16 flex items-center py-16'>
			<div className='max-w-[1240px] m-auto md: grid grid-cols-3 gap-8'>
				<div className='col-span-2'>
					<p className="uppercase text-xl  racking-widest text-[#5651e5]">About</p>
					<h2 className="py-4">Who I Am</h2>
					<br />
					<p className="py-2 text-gray-600">
						I am a younger guy not taking the typical 4 year degree path through
						early life. Banking on my love for technology and fascination for
						how things work. I took a job as an intern for a Software Consulting
						company that quickly had me joining the dev team. I started coding
						at 15 knowing how to write HTML and CSS to build websites for fun
						and cool programs to interact with the web never thinking of it as a
						career path.
					</p>
					<br />
					<p className="py-2 text-gray-600">
						I have a talent of learning things fast and always being driven to
						do and be the best i can. After deciding to not continue pursuing my
						Intelligent Systems Engineering degree at Indiana University i took
						back home the ambition to turning my hobby into a career of coding.
					</p>
					<br />
					<h3 className="py-2 text-gray-600 underline cursor-pointer">Check out some of my latest projects.</h3>
				</div>
				<div className="w-full h-auto my-[35%]">
					<img src='/assets/MeMoji.jpg' alt='/' />
				</div>
			</div>
		</div>
	);
};

export default about;
