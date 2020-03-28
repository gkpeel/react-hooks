import React, { useState, useEffect } from 'react';
import { Row, Col } from '../util/BaseStyles';

const Counter = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		document.title = `You clicked ${count} times`;
	});

	return (
		<div>
			<Row>
				<Col span={12}>
					<h1>You clicked the button {count} times.</h1>
					<button onClick={() => setCount(count + 1)}>Click Me</button>
				</Col>
			</Row>
		</div>
	);
};

export default Counter;
