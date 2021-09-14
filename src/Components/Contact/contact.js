import React from 'react';
import classes from './contact.module.css';

export const Contact = () => {
	return (
		<div id='contact' className={classes.contactContainer}>
			<div className={classes.wrapperSocialMedia}>
				<a
					href='https://www.facebook.com/Pink-limo-466413817489783'
					target='_blank'
					rel='noreferrer'>
					<i className='fab fa-facebook'></i>
				</a>
			</div>
			<div className={classes.wrapperSocialMedia}>
				<i class='fab fa-instagram'></i>
			</div>
			<div className={classes.mail}>
				<a href='mailto:contact.thepinklimousine@gmail.com'>
					<i class='fas fa-envelope-square'></i>
				</a>
			</div>
		</div>
	);
};
