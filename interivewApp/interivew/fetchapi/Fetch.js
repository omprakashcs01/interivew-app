import {Button, StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';

const Fetch = () => {
  const [data, setData] = useState(false);

  console.log('ssss',data);

  const fetchApi = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');

    let data = await response.json();
    data.map(element => {
      console.log(element.title);
    });
    console.log(data.title);
  };
  function handle() {
    setData( true)
  }

 
  return (
    <View>
      <Text>Fetch </Text>
      <Button title="data" onPress={handle} />
    </View>
  );
};

export default Fetch;

const styles = StyleSheet.create({});
