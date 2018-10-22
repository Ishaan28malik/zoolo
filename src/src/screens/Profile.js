import React from 'react';
import { View, Text, Picker } from 'react-native';
import styled from 'styled-components';
import { HeadingText, Title } from '../components/Text';
import { ButtonAlt } from '../components/Button';
import { Container } from '../components/Common';
import { Ionicons } from '@expo/vector-icons';

import { setUserData } from '../actions/user';
import { connect } from 'react-redux';

const sal = {
	'en': 'Profile',
	'hin': 'प्रोफाइल'
}


class Profile extends React.Component{

	static navigationOptions = {
		tabBarIcon: ({ focused, tintColor }) => {
			const iconName = `ios-contact`
         return <Ionicons name={iconName} size={25} color={tintColor} />;
		}
	}
	
	state = {
		country: 'in',
		lan: 'en',
		age: '12-18'
	}

	handleSub() {
		this.props.setUserData({
			country: this.state.country,
			lan: this.state.lan,
			ageGp: this.state.age
		})
		console.log(111);
	}

	render() {
		return (
			<Container>
				<HeadingText>{ sal[this.props.user.lan] }</HeadingText>	

				<View>
					<Title>CHOOSE COUNTRY</Title>
					<View style={{ borderRadius: 10, overflow: 'hidden' }}>
						<Picker
							selectedValue={this.state.country}
							style={{height: 50, width: '100%', backgroundColor: '#00232F', borderRadius: 10, color: '#fff', padding: 5 }}
							itemStyle={{ padding: 10 }}
							onValueChange={(itemValue, index) => this.setState({country: itemValue})}>
							<Picker.Item label="India" value="in"/>
							<Picker.Item label="Poland" value="pl"/>
							<Picker.Item label="China" value="cn"/>
							<Picker.Item label="US" value="us"/>
						</Picker>
					</View>
				</View>

				<View>
					<Title>CHOOSE LANGUAGE</Title>
					<View style={{ borderRadius: 10, overflow: 'hidden' }}>
						<Picker
							selectedValue={this.state.lan}
							style={{height: 50, width: '100%', backgroundColor: '#00232F', borderRadius: 10, color: '#fff', padding: 5 }}
							itemStyle={{ padding: 10 }}
							onValueChange={(itemValue, index) => this.setState({lan: itemValue})}>
							<Picker.Item label="English" value="en"/>
							<Picker.Item label="Hindi" value="hin"/>
						</Picker>
					</View>
				</View>

				<View>
					<Title>CHOOSE AGE GROUP</Title>
					<View style={{ borderRadius: 10, overflow: 'hidden' }}>
						<Picker
							selectedValue={this.state.age}
							style={{height: 50, width: '100%', backgroundColor: '#00232F', borderRadius: 10, color: '#fff', padding: 5 }}
							itemStyle={{ padding: 10 }}
							onValueChange={(itemValue, index) => this.setState({age: itemValue})}>
							<Picker.Item label="12-18" value="12-18"/>
							<Picker.Item label="18-40" value="18-40"/>
							<Picker.Item label="40+" value="40+"/>
						</Picker>
					</View>
				</View>

				<ButtonAlt onPress={() => this.handleSub()}>Submit</ButtonAlt>

			</Container>
			
		)
	}

};

function mapStateToProps(state) {
	return {
		user: state.userReducer
	}
}

function mapDispatchToProps(dispatch) {
	return {
		setUserData: (data) => dispatch(setUserData(data))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
