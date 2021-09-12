import React from 'react';
import classes from './contact.module.css';

export const Contact = () => {
	return (
		<div id='contact' className={classes.contactContainer}>
			<div className={classes.wrapperSocialMedia}>
				<i className='fab fa-facebook'></i>
			</div>
			<div className={classes.wrapperSocialMedia}>
				<i class='fab fa-instagram'></i>
			</div>
			<div className={classes.mail}>
				<i class='fas fa-envelope-square'></i>
			</div>
		</div>
	);
};
