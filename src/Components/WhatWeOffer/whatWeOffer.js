import React from 'react';
import classes from './whatWeOffer.module.css';
import limo2 from '../../assets/limo2.jpg';
import limo1 from '../../assets/limo1.jpg';
import limo4 from '../../assets/limo4.jpg';

export const WhatWeOffer = () => {
	return (
		<div id='whatWeOffer' className={classes.thePinkLimoContainer}>
			<div className={classes.wrapperPolaroid}>
				<div className={classes.polaroid}>
					<div className={classes.polaroidCardOne}>
						<img className={classes.img} src={limo2}></img>
					</div>
					<div className={classes.polaroidCardTwo}>
						<img className={classes.img} src={limo1}></img>
					</div>
					<div className={classes.polaroidCardThree}>
						<img className={classes.img} src={limo4}></img>
					</div>
				</div>
				<div className={classes.textPolaroid}></div>
			</div>
		</div>
	);
};
