import React from 'react';
import styled from 'styled-components';

const font = 'poppins';

export const HeadingText = styled.Text`
	font-family: ${font};
	font-size: 40;
	font-weight: 500
`

export const CardTitle = styled.Text `
	font-family: ${font};
	font-size: ${props => props.small ? '20px' : '24px'};
	font-weight: 100;
	color: #fff;
	margin-bottom: 10px;
`
export const CardMeta = styled.Text `
	font-family: ${font};
	font-size: 16;
	font-weight: 500;
	color: #fff;
`

export const Title = styled.Text`
	font-family: ${font};
	font-size: 16;
	color: #00232F;
	padding: 20px 0px;
`

export const BodyText = styled.Text`
	font-family: ${font};
	font-size: 14;
	color: #00232F;
	font-weight: 100;
	line-height: 24;
`