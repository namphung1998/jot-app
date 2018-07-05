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
import ReceivedReviewScreen from './screens/ReceivedReviewScreen'
import CircleScreen from "./screens/CircleScreen";
import WelcomeScreen from "./screens/WelcomeScreen";

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

    const ProfileNavigator = createStackNavigator({
      profile: { screen: ProfileScreen },
      receivedReview: { screen: ReceivedReviewScreen },
    }, {
      navigationOptions: { header: null }
    });

    const MainNavigator = createBottomTabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthNavigator },
      main: { screen: createBottomTabNavigator({
          Prompts: { screen: PromptNavigator },
          Profile: { screen: ProfileNavigator },
          Circle: { screen: CircleScreen }
        })}
    }, {
      navigationOptions: { tabBarVisible: false, lazy: true },
    });

    return (
      <Provider store={store}>
        <MainNavigator/>
      </Provider>
    );
  }
}
