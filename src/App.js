import React, { useState } from 'react';
import classes from './App.module.css';
import { Welcome } from './Components/Welcome/welcome';
export const App = () => {
	const [dropdown, setDropdown] = useState(false);

	return (
		<div className={classes.container}>
			<Welcome dropdown={dropdown} setDropdown={setDropdown} />
		</div>
	);
};
