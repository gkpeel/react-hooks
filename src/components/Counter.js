import React, { useState, useEffect } from 'react';

const Counter = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		document.title = `You clicked ${count} times`;
	});

	return (
		<div>
			<h1>You clicked the button {count} times.</h1>
			<button onClick={() => setCount(count + 1)}>Click Me</button>
		</div>
	);
};

export default Counter;
