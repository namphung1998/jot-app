import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  LayoutAnimation
} from 'react-native';
import { ListItem, Icon, Card } from 'react-native-elements';
import { connect } from 'react-redux';

class Submission extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderExpandedText() {
    if (this.props.expanded) {
      return (
        <Card>
          <View>
            <Text>{this.props.submission.body}</Text>
          </View>
        </Card>
      );
    }
  }


  render() {
    return (
      <View>
        <ListItem rightIcon={<Icon/>} onPress={this.props.onPress} title={this.props.submission.user.name}/>
        {this.renderExpandedText()}
      </View>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    expanded: state.submission.selectedId === ownProps.submission.id
  }
}

export default connect(mapStateToProps, {})(Submission);
