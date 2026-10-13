import React, { useCallback, useState } from 'react';
import { View, Text, Button } from 'react-native';
import Child from './child';

const Learn = () => {
  const [add, setAdd] = useState(0);
  
  const learning = useCallback(() => {
    console.log("learn");
  }, []);
  
  return (
    <View>
      <Text>{add}</Text>
      <Button title="ADD" onPress={() => setAdd(add + 1)} />
      <Child learn={learning} />
    </View>
  );
};

export default Learn;
