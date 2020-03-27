import React from 'react';
import styled from 'styled-components';
import Counter from './Counter';

const StyledApp = styled.div`
	max-width: 1024px;
	margin: 0 auto;
	font-family: Helvetica, Arial, sans-serif;
	color: #333;
	font-size: 1.2rem;
`;

const App = props => {
	return (
		<StyledApp>
			<Counter />
		</StyledApp>
	);
};

export default App;
