import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { createUser } from '../actions';
import Input from '../components/Input';
import BackButton from "../components/BackButton";

class SignUpScreen extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.user) {
      this.props.navigation.navigate('main');
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      email: '',
      password: '',
      passwordConfirm: ''
    }
  }

  onBackPress = () => {
    this.props.navigation.navigate('signIn');
  }

  onUserNameChange = (userName) => {
    this.setState({ userName });
  }

  onEmailChange = (email) => {
    this.setState({ email });
  }

  onPasswordChange = (password) => {
    this.setState({ password });
  }

  onPasswordConfirmChange = (passwordConfirm) => {
    this.setState({ passwordConfirm });
  }

  onButtonPress = () => {
    const { userName, email, password, passwordConfirm } = this.state;

    this.props.createUser({ userName, email, password, passwordConfirm });
  }

  render() {
    return (
      <View>
        <Header
          backgroundColor='#7dc99f'
          leftComponent={<BackButton onPress={this.onBackPress} text='Back to Sign in'/>}
        />
        <Input
          label='Username'
          value={this.state.userName}
          onChangeText={this.onUserNameChange}
        />
        <Input
          label='Email'
          value={this.state.email}
          onChangeText={this.onEmailChange}
        />
        <Input
          label='Password'
          value={this.state.password}
          onChangeText={this.onPasswordChange}
          secureTextEntry
        />
        <Input
          label='Password Confirmation'
          value={this.state.passwordConfirm}
          onChangeText={this.onPasswordConfirmChange}
          secureTextEntry
        />
        <Button
          containerViewStyle={{ paddingTop: 16 }}
          title='Sign up'
          onPress={this.onButtonPress}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  const { email, password, user, token } = state.auth;

  return { email, password, user, token };
}

export default connect(mapStateToProps, { createUser })(SignUpScreen);