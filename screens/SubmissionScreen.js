import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button } from 'react-native-elements';
import BackButton from "../components/BackButton";
import { withMappedNavigationProps } from 'react-navigation-props-mapper';
import { connect } from 'react-redux';
import { makeSubmission } from '../actions';
import Input from "../components/Input";
import Spinner from "../components/Spinner";

@withMappedNavigationProps()
class SubmissionScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      preface: '',
      body: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.submitted) {
      this.props.navigation.navigate('promptList');
    }
  }

  onBackPress = () => {
    this.props.navigation.goBack();
  }

  onButtonPress = () => {
    const { token, user, prompt, makeSubmission } = this.props;
    const { preface, body } = this.state;

    makeSubmission({ preface, body, prompt });
  }

  renderButton() {
    if (this.props.loading) {
      return (
        <Spinner style={{ paddingTop: 16 }}/>
      )
    }

    return (
      <Button
        title='Submit'
        onPress={this.onButtonPress}
        containerViewStyle={{ paddingTop: 16 }}
      />
    )
  }

  render() {
    return (
      <View>
        <Header
          backgroundColor='#7dc99f'
          leftComponent={<BackButton text='Back' onPress={this.onBackPress}/>}
          centerComponent={{ text: this.props.prompt.title }}
        />
        <Input
          label='Preface'
          value={this.state.preface}
          onChangeText={(preface) => this.setState({ preface })}
        />
        <Input
          label='Response'
          value={this.state.body}
          onChangeText={(body) => this.setState({ body })}
        />
        {this.renderButton()}
      </View>
    );
  }
}

function mapStateToProps(state) {
  const { token, user } = state.auth;
  const { submitted, loading } = state.submission;

  return { token, user, submitted, loading };
}

export default connect(mapStateToProps, { makeSubmission })(SubmissionScreen);
