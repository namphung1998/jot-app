import React from 'react';
import { Provider } from 'react-redux';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import store from './store';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import PromptListScreen from './screens/PromptListScreen';
import PromptDetailScreen from "./screens/PromptDetailScreen";
import SubmissionListScreen from "./screens/SubmissionListScreen";
import SubmissionScreen from "./screens/SubmissionScreen";
import ReviewScreen from "./screens/ReviewScreen";
import ProfileScreen from "./screens/ProfileScreen";

export default class App extends React.Component {
  render() {
    const AuthNavigator = createBottomTabNavigator({
      signIn: { screen: SignInScreen },
      signUp: { screen: SignUpScreen }
    }, {
      navigationOptions: { tabBarVisible: false }
    });

    const PromptDetailNavigator = createStackNavigator({
      promptDetail: { screen: PromptDetailScreen },
      submissionList: { screen: SubmissionListScreen },
      review: { screen: ReviewScreen },
      submit: { screen: SubmissionScreen }
    }, {
      navigationOptions: { header: null }
    });

    const PromptNavigator = createStackNavigator({
      promptList: { screen: PromptListScreen },
      promptDetail: { screen: PromptDetailNavigator }
    }, {
      navigationOptions: { header: null }
    });

    const MainNavigator = createBottomTabNavigator({
      auth: { screen: AuthNavigator },
      main: { screen: createBottomTabNavigator({
          prompt: { screen: PromptNavigator },
          profile: { screen: ProfileScreen }
        }) }
    }, {
      navigationOptions: { tabBarVisible: false, lazy: true }
    });

    return (
      <Provider store={store}>
        <MainNavigator/>
      </Provider>
    );
  }
}

