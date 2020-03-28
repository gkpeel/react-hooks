import React from 'react';
import { Divider, Body } from '../util/BaseStyles';
import Counter from './Counter';
import { NameInput } from './NameInput';

const App = () => {
	return (
		<Body>
			<Counter />
			<Divider />
			<NameInput />
		</Body>
	);
};

export default App;
