import React from 'react';
import {
  TouchableOpacity,
  Platform,
  Text
} from 'react-native';
import { Icon } from 'react-native-elements';

const BackButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      {/*<Icon color='#fff' name='chevron-left'/>*/}
      <Text style={{ color: 'white' }}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default BackButton;
