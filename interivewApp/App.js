import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import ProductHomeScreen from './important react native/ekart/App/ProductHomeScreen';
import ProductDetails from './important react native/ekart/App/ProductDetails';
import debounce from './important react native/ekart/App/debounce';
import SearchScreen from './important react native/Learn Search/SearchScreen';

import testUseMemo from './interivew/UseMemo and UseCall/useMemo';
import Parent from './interivew/Hoc/Parent';
import SearchUI from './src/Important  Component/Search/SearchUI';
import Home from './src/Important  Component/Screens/Home';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Parent" component={Parent}></Stack.Screen>
        <Stack.Screen name="testUseMemo" component={testUseMemo}></Stack.Screen>
        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}></Stack.Screen>
        <Stack.Screen
          name="ProductHomeScreen"
          component={ProductHomeScreen}></Stack.Screen>
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
