import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { createUser } from '../actions';
import Input from '../components/Input';
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import MyHeader from '../components/MyHeader';

class SignUpScreen extends Component {
  componentDidUpdate() {
    if (this.props.user) {
      this.props.navigation.navigate('Prompts');
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

  renderButton() {
    if (this.props.loading) {
      return <Spinner/>
    }

    return (
      <Button
        containerViewStyle={{ paddingTop: 16 }}
        title='Sign up'
        onPress={this.onButtonPress}
      />
    );
  }

  render() {
    return (
      <View>
        <MyHeader
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
        {this.renderButton()}
      </View>
    );
  }
}

function mapStateToProps(state) {
  const { email, password, user, token, loading } = state.auth;

  return { email, password, user, token, loading };
}

export default connect(mapStateToProps, { createUser })(SignUpScreen);
