import React from 'react';
import styled from 'styled-components';
import { View, Text, ScrollView, Image } from 'react-native';
import { HeadingText, Title, BodyText } from '../components/Text';
import { Container } from '../components/Common';
import { LinearGradient } from 'expo';

import { getStory } from '../actions/story';
import { connect } from 'react-redux';


class Single extends React.Component{
	
	state = {}
	componentDidMount() {
		 this.props.getStory(this.props.navigation.getParam('id'), this.props.navigation.getParam('lan'), this.props.navigation.getParam('cat'));
		// console.log(this.props.navigation.getParam('cat'));
	}

	render() {
		if (this.props.story) {
			return (
				<ScrollView>
					<View style={{ width: '100%', height: 350 }}>
						<Image source={{ uri: 'https://source.unsplash.com/random' }}  style={{ width: '100%', height: '100%' }}/>
						<View style={{ position: 'absolute', justifyContent: 'flex-end', padding: 20, width: '100%', height: '100%', zIndex: 10}}>
							<HeadingText style={{ color: '#fff' }}>{this.props.story.title}</HeadingText>
						</View>

						<LinearGradient
							colors={['transparent','rgba(0,0,255,0.6)']}
							style={{
								position: 'absolute',
								left: 0,
								right: 0,
								top: 0,
								height: '100%',
							}}
						/>

					</View>
					<Container>
						<BodyText>{ this.props.story.summary }</BodyText>
					</Container>
				</ScrollView>
			)
		}
		return (
			<Container>
				<BodyText>Loading...</BodyText>
			</Container>
		)
	}

};

const mapDispatchToProps = (dispatch) => {
	return {
		getStory: (id, lan, cat) => dispatch(getStory(id, lan, cat))
	}	
}

const mapStateToProps = (store) => {
	return {
		story: store.storyReducer.current
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Single);
