import React from 'react';
import classes from './leftSidebar.module.css';

export const LeftSidebar = (props) => {
	const dropdown = props.dropdown;
	console.log(props);
	const setDropdown = props.setDropdown;

	return (
		<div
			className={
				!dropdown
					? [classes.activeLeftSidebarContainer]
					: [classes.activeLeftSidebarContainer, classes.test].join(' ')
			}>
			<div className={classes.wrapperLinks}>
				<a
					href='#whoAreWe'
					className={classes.link}
					onClick={() => props.setDropdown(!dropdown)}>
					who are we
				</a>
				<a href='#whatWeOffer' className={classes.link}>
					What we offer
				</a>
				<a href='#bookUs' className={classes.link}>
					Book Us
				</a>
				<a
					href='#contact'
					className={classes.link}
					onClick={() => props.setDropdown(!dropdown)}>
					Contact
				</a>
			</div>
		</div>
	);
};
