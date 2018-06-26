import React from 'react';
import {
  TouchableOpacity,
  Platform,
  Text
} from 'react-native';

const BackButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text style={{ color: 'white' }}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default BackButton;
