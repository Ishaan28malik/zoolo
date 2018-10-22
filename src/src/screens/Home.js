import React from 'react';
import { ScrollView, Text } from 'react-native';
import Card from '../components/Card';
import { HeadingText } from '../components/Text';
import { Ionicons } from '@expo/vector-icons';


import { connect } from 'react-redux';
import { getStories } from '../actions/story';
import { setUserData } from '../actions/user';


const sal = {
	'en': 'Updates',
	'hin': 'अद्यतन'
}


class Home extends React.Component {

	static navigationOptions = {
		tabBarIcon: ({ focused, tintColor }) => {
			const iconName = `ios-albums`
         return <Ionicons name={iconName} size={25} color={tintColor} />;
		}
	}

	constructor(props) {
		super(props);
		this.subs = [
	  		this.props.navigation.addListener('didFocus', () => this.isFocused()),
		]	
	}

	isFocused() {
		this.props.getStories(this.props.user.lan, 'laws');
	}

	componentWillUnmount() {
	  this.subs.forEach(sub => sub.remove());
	}

	componentDidMount() {
		this.props.getStories(this.props.user.lan, 'laws');
	}
	render() {
		if (this.props.data) {
			return (
				<ScrollView style={{ backgroundColor: '#fff' }} contentContainerStyle={{ padding: 20 }}>
					<HeadingText>{sal[this.props.user.lan]}</HeadingText>
					{this.props.data.map((item, i) => 
						<Card {...item} key={i} onPress={() => this.props.navigation.navigate('Single', {id: item.id, lan: this.props.user.lan, cat: 'laws'})}/>
					)}
				</ScrollView>
			)
		}
		return (
			<ScrollView >
				<HeadingText>LAWS AND POLICIES</HeadingText>
				<Text>Loading....</Text>				
			</ScrollView>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getStories: (lan, cat) => dispatch(getStories(lan, cat)),
		setUserData: (data) => dispatch(setUserData(data))
	}
}

function mapStateToProps(state) {
	return {
		data: state.storyReducer.data,
		user: state.userReducer
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);