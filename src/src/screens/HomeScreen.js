import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import Home from './Home';
import Check from './Check';
import Report from './Report';
import BuyingGuide from './BuyingGuide';
import Profile from './Profile';
import SingleKnow from './SingleKnow';
import Single from './Single';


const HomeStack = createStackNavigator({
	Home: {
		screen: Home,
	},
	Single: Single
},
{
  header: null,
  headerMode: 'none'
});

HomeStack.navigationOptions = {
	tabBarIcon: ({ focused, tintColor }) => {
		const iconName = `ios-albums`
      return <Ionicons name={iconName} size={25} color={tintColor} />;
	}
}

const BuyingGuideStack = createStackNavigator({
	BuyingGuide: BuyingGuide,
	SingleKnow: SingleKnow	
},
{
  header: null,
  headerMode: 'none'
});

BuyingGuideStack.navigationOptions = {
	tabBarIcon: ({ focused, tintColor }) => {
		const iconName = `ios-compass`
      return <Ionicons name={iconName} size={25} color={tintColor} />;
	}
}

export default createBottomTabNavigator({
	Home: HomeStack,
	Check: Check,
	Report: Report,
	BuyingGuide: BuyingGuideStack,
	Profile: Profile
});
