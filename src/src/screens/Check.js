import React from 'react';
import { Container, Input, Text, View } from '../components/Common';
import { HeadingText } from '../components/Text';
import { TextInput } from 'react-native';
import { MapView, Location, Permissions, ImagePicker } from 'expo';
import { ButtonAlt, ButtonOutline } from '../components/Button';
import { Ionicons } from '@expo/vector-icons';

import { connect } from 'react-redux';

function mapStateToProps(state) {
	return {
		user: state.userReducer
	}
}

const sal = {
	'en': 'Check Autenticity',
	'hin': 'प्रामाणिकता'
}


class Check extends React.Component{

	static navigationOptions = {
		tabBarIcon: ({ focused, tintColor }) => {
			const iconName = `ios-checkmark-circle`
         return <Ionicons name={iconName} size={25} color={tintColor} />;
		}
	}

	componentWillMount = async () => {
		let { status } = await Permissions.askAsync(Permissions.LOCATION, Permissions.CAMERA, Permissions.CAMERA_ROLL);
		if (status !== 'granted') {
			this.setState({
			  errorMessage: 'Permission to access location was denied',
			});
		}
	}
	
	state = {
		place: '',
		price: '',
		coords: {
       latitude: 37.78825,
       longitude: -122.4324,
       latitudeDelta: 0.0922,
       longitudeDelta: 0.0421,
		},
		ex: ''
	}

	handleAddr = async () => {
		let coords = await Location.geocodeAsync(this.state.place);
		if ( coords[0] ) {
		  this.setState({coords: {latitude: coords[0].latitude, longitude: coords[0].longitude, latitudeDelta: 0.004757, longitudeDelta: 0.006866}})	
		}
		this.setState({ex: coords})
		console.log(coords);
	}

	takeAndUploadPhotoAsync = async () => {
		  let result = await ImagePicker.launchCameraAsync({
		    allowsEditing: true,
		    aspect: [4, 3],
		  });
	}

	render() {
		return (
			<Container>
				<HeadingText style={{ marginBottom: 30 }}>{ sal[this.props.user.lan] }</HeadingText>
				<Input 
					onChangeText = {(place) => this.setState({ place })}
					onEndEditing = {() => this.handleAddr()}
					value={this.state.place}
					placeholder="Place bought from..."
					/>

					<MapView
			        style={{ flex: 1, borderRadius: 10 }}
			        initialRegion={this.state.coords}
			        region={this.state.coords}
			      />

				<Input 
					onChangeText = {(price) => this.setState({ price })}
					value={this.state.price}
					placeholder="Price..."
					keyboardType="numeric"
					/>

				<ButtonOutline onPress={() => this.takeAndUploadPhotoAsync()}>Take Photo</ButtonOutline>

				<ButtonAlt>FIND</ButtonAlt>
			</Container>	
		)
	}

};
export default connect(mapStateToProps,null)(Check);
