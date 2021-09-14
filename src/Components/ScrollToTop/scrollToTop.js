import classes from './scrollToTop.module.css';
import React, { useState, useEffect } from 'react';
import { useWindowScroll } from 'react-use';

export const ScrollToTop = () => {
	const { y: pageYOffset } = useWindowScroll();
	const [visible, setVisibility] = useState(false);

	useEffect(() => {
		if (pageYOffset > 900) {
			setVisibility(true);
		} else {
			setVisibility(false);
		}
	}, [pageYOffset]);

	const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

	if (!visible) {
		return false;
	}
	return (
		<div className={classes.wrapperScrollToTop}>
			<div className={classes.scrollToTop} onClick={() => toTop()}>
				<i className='fas fa-chevron-up'></i>
			</div>
		</div>
	);
};
