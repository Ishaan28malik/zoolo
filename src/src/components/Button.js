import React from 'react';
import styled from 'styled-components';
import { View, Text, TouchableOpacity } from 'react-native';

const Font = 'poppins';

const ButtonContainer = styled.TouchableOpacity `
	border: 2px solid #fff;
	border-radius: 2px;
	align-items: center;
	padding: 10px 10px;
	width: 100;
`

const ButtonText = styled.Text `
	font-family: ${Font};
	font-size: 16px;
	color: #fff;
`

const ButtonContainerAlt = styled.TouchableOpacity`
	border-radius: 10px;
	align-items: center;
	padding: 15px 10px;
	width: 100%;
	background-color: #00232F;
	margin: 40px 0px;

`

const ButtonTextAlt = styled.Text `
	font-family: ${Font};
	font-size: 16px;
	color: #fff;
`

const ButtonOutlineContainer = styled.TouchableOpacity`
	border-radius: 10px;
	align-items: center;
	padding: 15px 10px;
	border: 1px solid #00232F;
`

const ButtonOutlineText = styled.Text `
	font-family: ${Font};
	font-size: 16px;
	color: #00232F;
`

/*

(_  _)(_  _)/ __)    /__\  (  )  (  )      /__\    (  )  (_  _)( ___)
 _)(_   )(  \__ \   /(__)\  )(__  )(__    /(__)\    )(__  _)(_  )__) 
(____) (__) (___/  (__)(__)(____)(____)  (__)(__)  (____)(____)(____)

*/

export const Button = (props) => (
	<ButtonContainer>
		<ButtonText onPress={props.onPress}>{props.children}</ButtonText>
	</ButtonContainer>
)

export const ButtonAlt = (props) => (
	<ButtonContainerAlt {...props}>
		<ButtonTextAlt>{props.children}</ButtonTextAlt>
	</ButtonContainerAlt>
)

export const ButtonOutline = (props) => (
	<ButtonOutlineContainer {...props}>
		<ButtonOutlineText>{props.children}</ButtonOutlineText>
	</ButtonOutlineContainer>
)