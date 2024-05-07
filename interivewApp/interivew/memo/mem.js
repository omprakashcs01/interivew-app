import React, { useMemo, useState } from 'react';
import { View, Text, Button } from 'react-native';

const Learn = () => {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);

  const multiply = useMemo(()=>{
    console.log('multiply=>>');
    return add * 10;
  },[add])
    


  

  return (
    <View>
      <Text>Learn multiply</Text>
      <Text>{multiply}</Text>
      <Button title='Add' onPress={() => setAdd(add + 1)} />
      <Text>{add}</Text>
      <Button title='Subtract' onPress={() => setMinus(minus - 1)} />
      <Text>{minus}</Text>
    </View>
  );
};

export default Learn;
