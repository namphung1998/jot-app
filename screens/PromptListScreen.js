import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { ListItem, Header } from 'react-native-elements';
import { connect } from 'react-redux';
import _ from 'lodash'
import { fetchPrompts } from "../actions";

class PromptListScreen extends Component {
  static navigationOptions = {
    title: 'Prompts'
  };

  componentWillMount() {
    const willFocusSubscription = this.props.navigation.addListener(
      'willFocus',
      () => {
        console.log('focused');
        this.props.fetchPrompts(this.props.token);
      }
    );

    this.props.fetchPrompts(this.props.token);
    this.data = this.props.prompts;
  }

  componentWillReceiveProps(nextProps) {
    this.data = nextProps.prompts;
  }

  renderItem = ({ item }) => {
    return (
      <ListItem
        title={item.title}
        onPress={() => { this.props.navigation.navigate('promptDetail', { prompt: item }) }}
      />
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          backgroundColor='#7dc99f'
          centerComponent={{ text: 'Prompts', style: { color: '#fff', fontSize: 36 } }}
        />
        <FlatList
          data={this.data}
          keyExtractor={(item, i) => String(i)}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  const prompts = _.map(state.prompts, (val) => {
    return { ...val };
  });

  return {
    prompts,
    token: state.auth.token
  };
}

export default connect(mapStateToProps, { fetchPrompts })(PromptListScreen);