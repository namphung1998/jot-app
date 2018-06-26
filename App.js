import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import store from './store';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import PromptListScreen from './screens/PromptListScreen';
import PromptDetail from "./screens/PromptDetail";

export default class App extends React.Component {
  render() {
    const AuthNavigator = createBottomTabNavigator({
      signIn: { screen: SignInScreen },
      signUp: { screen: SignUpScreen }
    }, {
      navigationOptions: { tabBarVisible: false }
    });

    const PromptNavigator = createStackNavigator({
      promptList: { screen: PromptListScreen },
      promptDetail: { screen: PromptDetail }
    }, {
      navigationOptions: { header: null }
    });

    const MainNavigator = createBottomTabNavigator({
      auth: { screen: AuthNavigator },
      main: { screen: PromptNavigator }
    }, {
      navigationOptions: { tabBarVisible: false }
    });

    return (
      <Provider store={store}>
        <MainNavigator/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
