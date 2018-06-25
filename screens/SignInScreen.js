import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { emailChange, passwordChange, loginUser } from '../actions';
import Spinner from '../components/Spinner';
import Input from '../components/Input';

class SignInScreen extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.user) {
      this.props.navigation.navigate('main');
    }
  }

  onEmailChange = (text) => {
    this.props.emailChange(text);
  }

  onPasswordChange = (text) => {
    this.props.passwordChange(text);
  }

  onSignInPress = () => {
    const { email, password, loginUser } = this.props;

    loginUser({ email: email.toLowerCase(), password });
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white', paddingTop: 16 }}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      )
    }
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner style={{ paddingTop: 16 }} />;
    }

    return (
      <View style={styles.buttonContainerStyle}>
        <Button
          containerStyle={styles.buttonStyle}
          title='Sign in'
          onPress={this.onSignInPress}
        />
        <Button
          containerStyle={styles.buttonStyle}
          title='Sign up'
        />
      </View>
    );
  }

  render() {
    return (
      <View>
        <Header
          backgroundColor='#7dc99f'
        />
        <View>
          <Input
            label='Email'
            value={this.props.email}
            placeholder='example@example.com'
            onChangeText={this.onEmailChange}
          />
        </View>
        <View>
          <Input
            label='Password'
            value={this.props.password}
            placeholder='password'
            secureTextEntry
            onChangeText={this.onPasswordChange}
          />
        </View>
        {this.renderError()}
        {this.renderButton()}

      </View>
    );
  }
}

const styles = {
  buttonContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingTop: 16
  },

  buttonStyle: {
    alignSelf: 'stretch'
  },

  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
    marginBottom: 16,
  },

};

function mapStateToProps(state) {
  const { email, password, loading, error, user } = state.auth;

  return { email, password, loading, error, user };
}

export default connect(mapStateToProps, { emailChange, passwordChange, loginUser })(SignInScreen);
