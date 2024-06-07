import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const myIcon = <Icon name="search" size={30} style={{paddingLeft: 10}} />;
const SearchUI = ({value, onChangeText}) => {
  return (
    <KeyboardAvoidingView>
      <View style={{}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderRadius: 10,
            margin: 20,
            // backgroundColor: 'red',
          }}>
          {myIcon}
          <TextInput
            style={{
              padding: 10,
              paddingLeft: 10,
              flex: 1,
              fontSize: 20,

              // backgroundColor: 'green',
            }}
            autoCapitalize="none"
            value={value}
            onChangeText={onChangeText}
            placeholder="Search..."
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SearchUI;

const styles = StyleSheet.create({});
