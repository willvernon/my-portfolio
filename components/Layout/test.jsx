<nav className='hidden md:flex flex-row items-center justify-between px-8 h-18 rounded-b-3xl bg-white dark:bg-[#222222]'>
	<span className='text-5xl text-gray-700 -mb-1'>
		<CgMonday className='rotate-180' />
	</span>
	<ul className='flex flex-row self-end h-12'>
		{MenuItems.map((item, index) => (
			<li
				className={classNames([
					'w-22 text-gray-400 hover:text-gray-700 cursor-pointer font-medium tracking-widest px-2 pt-[1rem] text-sm flex items-start justify-center rounded-lg',
					currentRoute === item &&
						'text-gray-700 border-b-[5px] border-gray-700 bg-gradient-to-b from-white to-gray-100 dark:from-[#222222] ',
				])}
				key={index}

			>
				<Link href='/'>Home</Link>
			</li>
		))}
	</ul>
	<div className='bg-white dark:bg-[#222222] hover:bg-gray-50 border-2 border-gray-700 text-sm text-gray-700 p-1 my-1 rounded-3xl font-medium tracking-wide leading-none'>
		<DayNightToggle
			onChange={() => setIsDarkMode(!isDarkMode)}
			checked={isDarkMode}
			className=' '
		/>
	</div>
</nav>
