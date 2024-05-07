import {StyleSheet, Text, View} from 'react-native';
import React, { createContext } from 'react';
import ChildA from './ChildA';

const data = createContext()
const Parent = () => {
    const name = 'Om'
  return (
    <data.Provider value={name}>
    <View>
      <ChildA />
    </View>
    </data.Provider>
  );
};

export default Parent;

const styles = StyleSheet.create({});
export {data}
//context Api
//create , provider, consumer
