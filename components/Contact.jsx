import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../public/assets/laptop.jpeg';

const Contact = () => {
  return (
		<div id='contact' className='w-full lg:h-screen'>
			<div className='max-w-[1240px] m-auto px-10 py-16 w-full '>
				<h1 className='text-2xl tracking-wide uppercase text-[#F12307]'>
					Contact
				</h1>
				<h2 className='py-4 text-gray-700 dark:text-white'>
					Get In Touch
				</h2>
				<div className='grid lg:grid-cols-5 gap-8'>
					{/* left */}
					<div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-[#7c7c7c] dark:shadow-[#404040]  rounded-xl p-4'>
						<div className='lg:py-8 px-2 h-full '>
							<div className=' '>
								<Image
									className='rounded-3xl hover:scale-110 ease-in duration-300 '
									src={ContactImg}
									alt='/'
								/>
							</div>
							<div>
								<h2 className='py-5'>Will Vernon</h2>
								<p>Front-End Developer</p>
								<p className='py-6'>
									I am available for freelance or full-time
									positions. Contact me and let&apos;s talk.
								</p>
							</div>
							<div>
								<p className='uppercase pt-8'>
									Connect With Me
								</p>
								<div className='flex items-center justify-between py-7'>
									<a
										href='https://www.linkedin.com/in/wmvernon/'
										target='_blank'
										rel='noreferrer'
									>
										<div className='rounded-full shadow-md shadow-[#7c7c7c] dark:shadow-[#404040] p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
											<FaLinkedinIn />
										</div>
									</a>
									<a
										href='https://github.com/vern111'
										target='_blank'
										rel='noreferrer'
									>
										<div className='rounded-full shadow-md shadow-[#7c7c7c] dark:shadow-[#404040] p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
											<FaGithub />
										</div>
									</a>

									<div className='rounded-full shadow-md shadow-[#7c7c7c] dark:shadow-[#404040] p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
										<AiOutlineMail />
									</div>
									<Link href='/resume'>
										<a>
											<div className='rounded-full shadow-md shadow-[#7c7c7c] dark:shadow-[#404040] p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
												<BsFillPersonLinesFill />
											</div>
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>

					{/* right */}
					<div className='col-span-3 w-full h-auto shadow-xl shadow-[#7c7c7c] dark:shadow-[#404040] rounded-xl lg:p-4'>
						<div className='p-4'>
							<form
								action='https://getform.io/f/4d967a36-bbe1-43f1-bd90-8720780eecf9'
								method='POST'
								encType='multipart/form-data'
							>
								<div className='grid md:grid-cols-2 gap-4 w-full py-2'>
									<div className='flex flex-col'>
										<label className='uppercase text-sm py-2'>
											Name
										</label>
										<input
											className='border-2 rounded-lg p-3 flex border-[#00000093] text-black'
											type='text'
											name='name'
										/>
									</div>
									<div className='flex flex-col'>
										<label className='uppercase text-sm py-2'>
											Phone Number
										</label>
										<input
											className='border-2 rounded-lg p-3 flex border-[#00000093] text-black'
											type='text'
											name='phone'
										/>
									</div>
								</div>
								<div className='flex flex-col py-2'>
									<label className='uppercase text-sm py-2'>
										Email
									</label>
									<input
										className='border-2 rounded-lg p-3 flex border-[#00000093] text-black'
										type='email'
										name='email'
									/>
								</div>
								<div className='flex flex-col py-2'>
									<label className='uppercase text-sm py-2'>
										Subject
									</label>
									<input
										className='border-2 rounded-lg p-3 flex border-[#00000093] text-black'
										type='text'
										name='subject'
									/>
								</div>
								<div className='flex flex-col py-2'>
									<label className='uppercase text-sm py-2'>
										Message
									</label>
									<textarea
										className='border-2 rounded-lg p-3 border-[#00000093] text-black'
										rows='10'
										name='message'
									></textarea>
								</div>
								<button className='w-full p-4 text-gray-100 mt-4 bg-slate-600'>
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
				<div className='flex justify-center py-12'>
					<Link href='/'>
						<a>
							<div className='rounded-full shadow-lg shadow-[#7c7c7c] dark:shadow-[#404040] p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
								<HiOutlineChevronDoubleUp
									className='text-[#F12307]'
									size={30}
								/>
							</div>
						</a>
					</Link>
				</div>
			</div>
		</div>
  );
};

export default Contact;