import React, { Component } from 'react';
import {
  View,
  Text,
  LayoutAnimation
} from 'react-native';
import { ListItem, Icon, Card, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { submitReview } from "../actions";
import Input from "./Input";

class Submission extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewBody: ''
    };
  }

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  onReviewPress = () => {
    const { submitReview, prompt, submission } = this.props;

    submitReview({
      prompt,
      submission,
      body: this.state.reviewBody
    });
  }

  renderExpandedText() {
    if (this.props.expanded) {
      return (
        <Card title={this.props.prompt.title}>
          <View style={styles.submissionContainerStyle}>
            <Text>{this.props.submission.body}</Text>
          </View>
          <Card>
            <Input
              label='What do you think?'
              value={this.state.reviewBody}
              onChangeText={(reviewBody) => this.setState({ reviewBody })}
            />
            <Button
              containerViewStyle={{ paddingTop: 16 }}
              title='Submit Review'
              onPress={this.onReviewPress}
            />
          </Card>
        </Card>
      );
    }
  }


  render() {
    let author;

    if (this.props.submission.user.id === this.props.user.id) {
      author = `${this.props.user.name} (me)`;
    } else {
      author = this.props.submission.user.name;
    }

    return (
      <View>
        <ListItem rightIcon={<Icon/>} onPress={this.props.onPress} title={author}/>
        {this.renderExpandedText()}
      </View>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { user, token } = state.auth;

  return {
    expanded: state.submission.selectedId === ownProps.submission.id,
    user,
    token,
    submitted: state.review.submitted
  }
}

const styles = {
  submissionContainerStyle: {
    borderStyle: 'solid'
  }
};

export default connect(mapStateToProps, { submitReview })(Submission);
