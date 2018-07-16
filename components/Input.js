import React from 'react';
import { View, Text } from 'react-native';
import { FormInput, FormLabel } from 'react-native-elements';

const Input = (props) => {
  const { secureTextEntry, placeholder, label, value, onChangeText } = props;

  return (
    <View>
      <FormLabel>{label}</FormLabel>
      <FormInput
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    paddingTop: 16
  },
};

export default Input;
