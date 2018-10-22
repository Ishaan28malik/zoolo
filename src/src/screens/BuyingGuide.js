import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Container } from '../components/Common';
import Card  from '../components/Card';
import { HeadingText } from '../components/Text';
import { Ionicons } from '@expo/vector-icons';


import { getStories } from '../actions/story';
import { connect } from 'react-redux';

const sal = {
	'en': 'Buying Guide',
	'hin': 'ख़रीदना गाइड'
}

class BuyingGuide extends React.Component{

	constructor(props) {
		super(props);
		this.subs = [
	  		this.props.navigation.addListener('didFocus', () => this.isFocused()),
		]
	}	

	isFocused() {
		this.props.getStories(this.props.user.lan, 'guide');
	}

	componentWillUnmount() {
	  this.subs.forEach(sub => sub.remove());
	}

	static navigationOptions = {
		tabBarIcon: ({ focused, tintColor }) => {
			const iconName = `ios-compass`
         return <Ionicons name={iconName} size={25} color={tintColor} />;
		}
	}

	componentDidMount() {
		this.props.getStories(this.props.user.lan, 'guide');
	}
	
	navav(id) {
		//this.props.navigation.navigate('SingleKnow', {id: id,lan:this.props.user.lan, cat:'guide'});

	}
	

	render() {
		if (this.props.data) {
			return (
				<ScrollView style={{    backgroundColor: '#fff' }} contentContainerStyle={{  padding: 20 }}>
					<HeadingText>{sal[this.props.user.lan]}</HeadingText>
					{ this.props.data.map((d, i) => 
						<Card {...d} key={i} onPress={() => this.navav(d.id) }/>
					)}	
				</ScrollView>
			)
		}
		return (
			<Container>
				<HeadingText>Loading...</HeadingText>
			</Container>	
		)
	}


};

function mapDispatchToProps(dispatch) {
	return {
		getStories: (lan, cat) => dispatch(getStories(lan, cat)),
	}
}

function mapStateToProps(state) {
	return {
		data: state.storyReducer.data,
		user: state.userReducer
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(BuyingGuide);

