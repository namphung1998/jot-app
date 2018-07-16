import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { ListItem, Header } from 'react-native-elements';
import { connect } from 'react-redux';
import _ from 'lodash'
import { fetchPrompts } from "../actions";

class PromptListScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Prompts'
    };
  }

  componentDidMount() {
    const willFocusSubscription = this.props.navigation.addListener(
      'willFocus',
      () => {
        this.props.fetchPrompts();
        this.data = this.props.prompts;
      }
    );
  }

  componentWillReceiveProps(nextProps) {
    this.data = nextProps.prompts;
  }

  renderItem = ({ item }) => {
    return (
      <ListItem
        title={item.title}
        onPress={() => { this.props.navigation.navigate('promptDetail', { prompt: item }) }}
        bottomDivider
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
  return {
    prompts: state.prompts,
    token: state.auth.token
  };
}

export default connect(mapStateToProps, { fetchPrompts })(PromptListScreen);
