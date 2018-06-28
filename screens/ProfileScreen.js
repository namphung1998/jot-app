import React, { Component } from 'react';
import { View, FlatList, Dimensions } from 'react-native';
import { Header, Card, ListItem, Button, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchUserSubmissions, logoutUser } from '../actions';
import Spinner from "../components/Spinner";

const SCREEN_HEIGHT = Dimensions.get('window').height;

class ProfileScreen extends Component {

    componentWillMount() {
    const willFocusSubscription = this.props.navigation.addListener(
      'willFocus',
      () => {
        const { fetchUserSubmissions, user, token } = this.props;

        fetchUserSubmissions({ user, token });
        this.data = this.props.userSubmittedList;
      }
    );
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.loggedIn) {
      this.props.navigation.navigate('auth');
    }

    this.data = nextProps.userSubmittedList;
  }

  renderItem = ({ item }) => {
    return (
      <ListItem
        onPress={() => { this.props.navigation.navigate('receivedReview'), { submission: item }}}
        title={item.preface}
      />
    );
  }

  onLogoutPress = () => {
    this.props.logoutUser();
  }

  renderButton = () => {
    if (this.props.loading) {
      return <Spinner/>;
    }

    return (
      <Button
        title='Log out'
        containerViewStyle={{ paddingTop: 16 }}
        onPress={this.onLogoutPress}
      />
    );
  }

  render() {
    if (_.isNull(this.props.user)) {
      return <View/>;
    }

    return (
      <View>
        <Header
          backgroundColor='#7dc99f'
          centerComponent={{ text: this.props.user.name, style: { color: '#fff', fontSize: 36 } }}
        />
        <Card title='Submissions'>
          <View style={{ height: 0.50 * SCREEN_HEIGHT }}>
            <FlatList
              data={this.data}
              renderItem={this.renderItem}
              keyExtractor={(item, i) => String(i)}
            />
          </View>
        </Card>
        {this.renderButton()}
      </View>
    );
  }
}

function mapStateToProps(state) {
  const { user, token, loggedIn, loading } = state.auth;
  const { userSubmittedList } = state.submission;

  return { user, token, userSubmittedList, loggedIn, loading };
}

export default connect(mapStateToProps, { fetchUserSubmissions, logoutUser })(ProfileScreen);