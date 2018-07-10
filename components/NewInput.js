import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormInput } from 'react-native-elements';

class NewInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: props.value || '',
      height: 0
    }
  }

  onContentSizeChange = (event) => {
    let height = event.nativeEvent.contentSize.height;

    this.setState({ height });
  }

  render() {
    const {
      secureTextEntry,
      placeholder,
      label,
      value,
      onChangeText,
      multiline,
      autoCorrect,
      style
    } = this.props;

    return (
      <View>
        <Text style={styles.labelStyle}>{label}</Text>
        <FormInput
          multiline={multiline}
          autoCorrect={autoCorrect || false}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          value={value}
          onChangeText={onChangeText}
          onContentSizeChange={this.onContentSizeChange}
          inputStyle={[
            style,
            { height: Math.max(this.state.height + 4, 25) },
            styles.inputStyle
          ]}
        />
      </View>
    );
  }
}

const styles = {
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    paddingTop: 16
  },

  inputStyle: {
    // backgroundColor: 'blue',
    color: '#000',
    width: '100%'
  }
};

export default NewInput;
