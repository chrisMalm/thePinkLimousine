import React from 'react';
import classes from './leftSidebar.module.css';

export const LeftSidebar = (props) => {
	const dropdown = props.dropdown;
	return (
		<>
			{dropdown ? (
				<div className={classes.activeLeftSidebarContainer}>
					<div className={classes.wrapperLinks}>
						<a href='#' className={classes.link}>
							who are we
						</a>
						<a href='#' className={classes.link}>
							What we offer
						</a>
						<a href='#' className={classes.link}>
							Pricing
						</a>
						<a href='#' className={classes.link}>
							Contact
						</a>
					</div>
				</div>
			) : (
				<div className={classes.leftSidebarContainer}>
					<div className={classes.wrapperLinks}>
						<a href='#' className={classes.link}>
							who are we
						</a>
						<a href='#' className={classes.link}>
							What we offer
						</a>
						<a href='#' className={classes.link}>
							Pricing
						</a>
						<a href='#' className={classes.link}>
							Contact
						</a>
					</div>
				</div>
			)}
		</>
	);
};
