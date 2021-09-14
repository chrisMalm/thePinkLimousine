import React, { useState } from 'react';
import classes from './whoAreWe.module.css';
import whoAreWeImg from '../../assets/taxiCap.jpg';

export const WhoAreWe = () => {
	return (
		<div id='whoAreWe' className={classes.whoAreWeContainer}>
			<div className={classes.wrapperPersonOne}>
				<img className={classes.taxiCap} src={whoAreWeImg}></img>
				<span>Jimmy Stjärna</span>
				<div className={classes.textPersonOne}>
					ejkek jeej eje iepepe ejpejeje je eh e, ejkek jeej eje <br />
					iepepe ejpejeje je eh e, ejkek jeej eje iepepe ejpejeje je eh e ejkek
					jeej eje iepepe ejpejeje je eh e ejkek jeej eje iepepe ejpejeje je eh
					e,ejkek jeej eje iepepe ejpejeje je eh e
				</div>
			</div>
			<div className={classes.wrapperPersonTwo}>
				<img className={classes.taxiCap} src={whoAreWeImg}></img>
				<span>Christoffer Malmgren</span>
				<div className={classes.textPersonTwo}>
					ejkek jeej eje iepepe ejpejeje je eh e, ejkek jeej eje iepepe ejpejeje
					je eh e, ejkek jeej eje iepepe ejpejeje je eh e ejkek jeej eje iepepe
					ejpejeje je eh e ejkek jeej eje iepepe ejpejeje je eh e,ejkek jeej eje
					iepepe ejpejeje je eh e
				</div>
			</div>
		</div>
	);
};
