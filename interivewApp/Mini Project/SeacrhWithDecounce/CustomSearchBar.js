import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const CustomSearchBar = ({value, onChangeText}) => {
  return (
    <View>
      <View
        style={{
          borderWidth: 1,
          marginHorizontal: 50,
          borderRadius: 10,
        }}>
        <TextInput
          style={{paddingLeft: 10, fontSize: 18}}
          placeholder="Search..."
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
};

export default CustomSearchBar;

const styles = StyleSheet.create({});
