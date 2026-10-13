import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import useCounter from './useCounter';

const parent = () => {
//   const [count, setCount] = useState(0);

//   function Increment() {
//     setCount(count + 1);
//   }
//   function decrement() {
//     setCount(count - 1);
//   }

const [count, Increment, decrement] = useCounter(10)

  return (
    <View>
      <Text>{count}</Text>
      <Button title="Add"  onPress={Increment}/>
      <Button title="sub" onPress={decrement} />
    </View>
  );
};

export default parent;

const styles = StyleSheet.create({});
