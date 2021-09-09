import React from 'react';
import classes from './welcome.module.css';
import { GiHamburgerMenu } from 'react-icons/gi';

export const Welcome = () => {
	return (
		<>
			<div className={classes.cross}>
				<GiHamburgerMenu />
				hej
			</div>
			<div className={classes.welcomeContainer}>
				<div className={classes.logoContainer}>
					<div className={classes.logo}></div>
				</div>
			</div>
		</>
	);
};
