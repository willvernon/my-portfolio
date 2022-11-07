// config/buttons.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCompass,
	faMapMarkerAlt,
	faUser,
	faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';

const navButtons = [
	{
		label: 'Home',
		path: '/',
		icon: <FontAwesomeIcon icon={faCompass} />,
	},
	{
		label: 'Projects',
		path: '/projects',
		icon: <FontAwesomeIcon icon={faMapMarkerAlt} />,
	},
	
	{
		label: 'Contact',
		path: '/contact',
		icon: <FontAwesomeIcon icon={faUser} />,
	},
];

export default navButtons;
