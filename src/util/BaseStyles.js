import React from 'react';
import styled from 'styled-components';

export const Body = styled.div`
	max-width: 1024px;
	margin: 0 auto;
	font-family: Helvetica, Arial, sans-serif;
	color: #333;
	font-size: 1.2rem;
`;

export const Divider = styled.div`
	height: 2px;
	width: 100%;
	background-color: #333;
	margin: {
		top: 1.2rem;
		bottom: 1.2rem;
	}
`;

export const Row = styled.div`
	margin: {
		top: 1.2rem;
		bottom: 1.2rem;
	}
	display: flex;
	flex-wrap: wrap;
`;

export const Col = styled.div`
	width: ${props => (props.span / 12) * 100}%;
	flex-basis: ${props => (props.span / 12) * 100}%;
`;
