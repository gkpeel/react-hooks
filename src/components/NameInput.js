import React, { useState } from 'react';
import { Row, Col } from '../util/BaseStyles';

export const NameInput = props => {
	const [name, setName] = useState(null);

	return (
		<Row>
			<Col span={12}>
				<h2>Fill out this form:</h2>
			</Col>
			<Col span={6}>
				<label style={{ display: 'block' }} htmlFor="name">
					Enter your name:
				</label>
				<input id="name" onChange={e => setName(e.target.value)} />
			</Col>
			<Col span={6}>
				<h3>Your name is {name}</h3>
			</Col>
		</Row>
	);
};
