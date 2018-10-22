import React from 'react';

import { createStackNavigator } from 'react-navigation';

import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';

import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import Check from './src/screens/Check';
import Report from './src/screens/Report';
import BuyingGuide from './src/screens/BuyingGuide';
import Single from './src/screens/Single';

import store from './src/store';
import { Provider } from 'react-redux';

import { Asset, Font, AppLoading } from 'expo';


export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (

        <Provider store={store}>
          <HomeScreen />
        </Provider>

      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/icon.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'poppins': require('./assets/fonts/Poppins-Medium.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

// export default createStackNavigator({
//   Login: {
//     screen: LoginScreen
//   },
//   Home: {
//     screen: HomeScreen
//   }
// },
// {
//   header: null,
//   headerMode: 'none'
// });