import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { Header } from 'react-native-elements';
import { connect } from 'react-redux';
import { withMappedNavigationProps } from 'react-navigation-props-mapper';
import _ from 'lodash';
import { fetchSubmissions,selectSubmission, clearReview } from "../actions";
import BackButton from "../components/BackButton";
import Submission from "../components/Submission";

@withMappedNavigationProps()
class SubmissionListScreen extends Component {
  componentDidMount() {
    const didBlurSubscription = this.props.navigation.addListener(
      'didBlur',
      () => {
        this.props.clearReview();
      }
    );

    const willFocusSubscription = this.props.navigation.addListener(
      'willFocus',
      () => {
        const { fetchSubmissions, prompt, token } = this.props;
        // fetchSubmissions({ prompt, token });
        fetchSubmissions(prompt);
        this.data = this.props.submissions;
      }
    )
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.submitted) {
      this.props.navigation.navigate('promptList');
    }
    this.data = nextProps.submissions;
  }

  onBackPress = () => {
    this.props.navigation.goBack();
  }

  renderItem = ({ item }) => {
    return <Submission prompt={this.props.prompt} onPress={() => { this.props.selectSubmission(item.id) }} submission={item} />
  };

  render() {
    return (
      <View>
        <Header
          backgroundColor='#7dc99f'
          leftComponent={<BackButton text='Back' onPress={this.onBackPress}/>}
        />
        <FlatList
          data={this.data}
          renderItem={this.renderItem}
          keyExtractor={(item, i) => String(i)}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  const submissions = _.map(state.submission.submittedList, (val) => {
    return { ...val };
  });

  console.log(submissions);

  return {
    submissions,
    token: state.auth.token,
    submitted: state.review.submitted
  };
}

export default connect(mapStateToProps, { fetchSubmissions, selectSubmission, clearReview })(SubmissionListScreen);
