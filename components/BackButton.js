import React from 'react';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Text
} from 'react-native';

const BackButton = ({ text, onPress }) => {
  if (Platform.OS === 'ios') {
    return (
      <TouchableOpacity onPress={onPress}>
        <Text style={{ color: 'white' }}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableNativeFeedback onPress={onPress}>
      <Text style={{ color: 'white' }}>
        {text}
      </Text>
    </TouchableNativeFeedback>
  );
};

export default BackButton;
