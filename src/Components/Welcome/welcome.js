import React from 'react';
import classes from './welcome.module.css';
import Hamburger from 'hamburger-react';
import { LeftSidebar } from '../LeftSidebar/leftSidebar';

export const Welcome = (props) => {
	const dropdown = props.dropdown;
	const setDropdown = props.setDropdown;
	return (
		<>
			<LeftSidebar dropdown={dropdown} />
			<div className={classes.cross} onClick={() => setDropdown(!dropdown)}>
				<Hamburger size={20} />
			</div>
			<div className={classes.welcomeContainer}>
				<div className={classes.logoContainer}>
					<div className={classes.logo}></div>
				</div>
			</div>
		</>
	);
};
