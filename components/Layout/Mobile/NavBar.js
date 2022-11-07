
import NavButton from './NavButton';

const NavBar = (props) => (
	<div className='flex md:hidden flex-row items-center justify-around px-8 h-12 bg-white visible md:invisible fixed bottom-0 w-full rounded-t-3xl text-2xl'>
		{props.navButtons.map((button) => (
			<NavButton
				key={button.path}
				path={button.path}
				label={button.label}
				icon={button.icon}
			/>
		))}
	</div>
);

export default NavBar;
