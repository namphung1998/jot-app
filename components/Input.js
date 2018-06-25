import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormInput } from 'react-native-elements';

class Input extends Component {
  render() {
    const { secureTextEntry, placeholder, label, value, onChangeText } = this.props;

    return (
      <View>
        <Text style={styles.labelStyle}>{label}</Text>
        <FormInput
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          value={value}
          onChangeText={onChangeText}
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
};

export default Input;