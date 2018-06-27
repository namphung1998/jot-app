import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { Header, Card, ListItem, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchUserSubmissions, logoutUser } from '../actions';

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
        onPress={() => {}}
        title={item.preface}
      />
    );
  }

  onLogoutPress = () => {
    this.props.logoutUser();
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
          <FlatList
            data={this.data}
            renderItem={this.renderItem}
            keyExtractor={(item, i) => String(i)}
          />
        </Card>
        <Button
          title='Log out'
          containerViewStyle={{ paddingTop: 16 }}
          onPress={this.onLogoutPress}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  const { user, token, loggedIn } = state.auth;
  const { userSubmittedList } = state.submission;

  return { user, token, userSubmittedList, loggedIn };
}

export default connect(mapStateToProps, { fetchUserSubmissions, logoutUser })(ProfileScreen);