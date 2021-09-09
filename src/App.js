import React from 'react';
import classes from './App.module.css';
import { Welcome } from './Components/Welcome/welcome';
export const App = () => {
	return (
		<div className={classes.container}>
			<Welcome />
		</div>
	);
};
