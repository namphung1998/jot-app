import React from 'react';
import { View, Platform } from 'react-native';
import { Header } from 'react-native-elements';

const MyHeader = (props) => {
  const { text, innerContainerStyle, leftComponent, backgroundColor } = props;

  return (
    <View style={{ paddingTop: Platform.OS === 'android' ? 24 : null }}>
      <Header
        centerComponent={{ text, style: { color: '#fff', fontSize: 36 } }}
        leftComponent={leftComponent}
        innerContainerStyle={innerContainerStyle}
        backgroundColor={backgroundColor}
      />
    </View>
  );
}

export default MyHeader;
