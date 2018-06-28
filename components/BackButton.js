import React from 'react';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Text
} from 'react-native';

const BackButton = (props) => {
  return Platform.OS === 'ios' ? (
    <TouchableOpacity onPress={props.onPress}>
      <Text style={{ color: 'white' }}>{props.text}</Text>
    </TouchableOpacity>
  ) : (
    <TouchableNativeFeedback>
      <Text style={{ color: 'white' }}>{props.text}</Text>
    </TouchableNativeFeedback>
  );
};

export default BackButton;
