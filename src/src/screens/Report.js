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
	'en': 'Report a Place',
	'hin': 'जगह की रिपोर्ट करें'
}


const place = {
	'en': 'Address of place',
	'hin': 'जगह का पत'
}

const desc = {
	'en': 'Add more description if possible..',
	'hin': 'जगह का विवरण'
}

const img = {
	'en': 'Related Image',
	'hin': 'संबंधित छवि'
}

const buttonText = {
	'en': 'Submit',
	'hin': 'निवेदन करना'
}


class Report extends React.Component{

	static navigationOptions = {
		tabBarIcon: ({ focused, tintColor }) => {
			const iconName = `ios-aperture`
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
		description: '',
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
				<HeadingText style={{ marginBottom: 30 }}>{sal[this.props.user.lan]}</HeadingText>
				<Input 
					onChangeText = {(place) => this.setState({ place })}
					onEndEditing = {() => this.handleAddr()}
					value={this.state.place}
					placeholder={place[this.props.user.lan]}
					/>

					<MapView
			        style={{ flex: 1, borderRadius: 10 }}
			        initialRegion={this.state.coords}
			        region={this.state.coords}
			      />

				<Input 
					onChangeText = {(description) => this.setState({ description })}
					value={this.state.description}
					placeholder={desc[this.props.user.lan]}
					multiline={true}
					style={{ height: 100}}
					/>


				<ButtonOutline onPress={() => this.takeAndUploadPhotoAsync()}>{img[this.props.user.lan]}</ButtonOutline>

				<ButtonAlt>{ img[this.props.user.lan] }</ButtonAlt>
			</Container>	
		)
	}

};
export default connect(mapStateToProps, null)(Report);
