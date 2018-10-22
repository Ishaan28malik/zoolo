import styled from 'styled-components';
import React from 'react';
import { View, TextInput } from 'react-native';

export const Container = styled.View`
	padding: 20px;
	background-color: #fff;	
	flex: 1;
`;

export const I = styled.TextInput`
	border: 1px solid #00232F;
	font-family: Roboto;
	color: #00232F;
	border-radius: 10;
	padding: 10px 15px;
	margin: 10px 0px;
`;

export const Input = (props) => (
	<I
		{...props}
		underlineColorAndroid ="rgba(0,0,0,0)"
	/>
);