import React from 'react';
import { View, Text } from 'react-native';
import { Container } from '../components/Common';
import { Card } from '../components/Card';
import { getStory } from '../actions/story';


import { connect } from 'react-redux';

class SingleKnow extends React.Component{
	
	componentDidMount() {
		this.props.getStory( this.props.navigation.getParam('id'), this.props.navigation.getParam('lan'), this.props.navigation.getParam('cat'));
	}

	state = {}
	render() {
		if (this.props.data) {
			return (
				<Container>
					{this.props.data.guide.map((d, i) => 
						<Card {...d} key={i} />
					)}
				</Container>
			)
		} else {
			return (
				<Container>
					<Text>Loading...</Text>
				</Container>				
			)
		}
	}

};

function mapDispatchToProps(dispatch) {
	return {
		getStory: (id, lan, cat) => dispatch(getStory(id, lan, cat))
	}
}

function mapStateToProps(state) {
	return {
		data: state.storyReducer.current
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleKnow);
