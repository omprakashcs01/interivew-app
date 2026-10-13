import React, { memo } from 'react';
import { View, Text } from 'react-native';

const Child = (props) => {
  console.log('test child=>>');

  return (
    <View>
      <Text>Child</Text>
    </View>
  );
};

export default memo(Child)
