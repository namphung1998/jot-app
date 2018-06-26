import React from 'react';
import { View } from 'react-native';

import getRNDraftJSBlocks from 'react-native-draftjs-render';

const TestInput = () => {
  const editorState = {};

  const blocks = getRNDraftJSBlocks({ editorState });

  return (
    <View style={{ flex: 1 }}>
      {blocks}
    </View>
  )
};

export default TestInput;