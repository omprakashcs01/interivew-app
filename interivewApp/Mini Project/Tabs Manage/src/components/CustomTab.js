import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const CustomTab = ({onPress, text}) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'grey',
            padding: 10,
            paddingHorizontal: 50,
            borderEndWidth: 1,
          }}
          onPress={onPress}>
          <Text>{text}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomTab;

const styles = StyleSheet.create({});
