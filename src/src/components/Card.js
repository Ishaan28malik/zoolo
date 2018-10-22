import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo';
import styled from 'styled-components';
import { CardTitle, CardMeta } from './Text';


const CardContainer = styled.View`
	background-color: #fff;
	border-radius: 10px;
	margin: ${props => props.small ? '20px 6px' : '20px 0px'};
	width: ${props => props.small ? "40%" : "100%"};
	height: 200px;
`;

const CardImage = styled.Image`
	width: 100%;
	height: 100%;
	border-radius: 10px;
	resizeMode: cover;
`;

const CardContent = styled.TouchableOpacity`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	justify-content: center;
	z-index: 100;
	padding: 0px 20px;
`;


/*

(_  _)(_  _)/ __)    /__\  (  )  (  )      /__\    (  )  (_  _)( ___)
 _)(_   )(  \__ \   /(__)\  )(__  )(__    /(__)\    )(__  _)(_  )__) 
(____) (__) (___/  (__)(__)(____)(____)  (__)(__)  (____)(____)(____)

*/

const Card = ({ title, meta='', small, onPress, image='https://source.unsplash.com/1600x900/?elephant' }) => (
	<CardContainer elevation={10} small={small} >
		<CardImage source={{ uri: image }} />
		<CardContent activeOpacity={0.7} small onPress={onPress}>
			<CardTitle small={small}>{ title }</CardTitle>
			<CardMeta>{ meta }</CardMeta>
		</CardContent>
		<LinearGradient
          colors={['transparent','rgba(0,0,255,0.6)']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: '100%',
            borderRadius: 10
          }}
     	/>
	</CardContainer>
);


export default Card;