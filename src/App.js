import React, { useState } from 'react';
import classes from './App.module.css';
import { Welcome } from './Components/Welcome/welcome';
import { WhatWeOffer } from './Components/WhatWeOffer/whatWeOffer';
import { Contact } from './Components/Contact/contact';
import { WhoAreWe } from './Components/WhoAreWe/whoAreWe';

export const App = () => {
	const [dropdown, setDropdown] = useState(false);
	return (
		<div className={classes.container}>
			<Welcome dropdown={dropdown} setDropdown={setDropdown} />
			<WhatWeOffer />
			<WhoAreWe />
			<Contact />
		</div>
	);
};
