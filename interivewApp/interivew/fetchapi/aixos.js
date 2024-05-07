
import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const Fetch = () => {
  const [data, setData] = useState(false);

  console.log('ssss', data);

  const fetchApi = async () => {
    try {
      let response = await axios.get('https://jsonplaceholder.typicode.com/posts');

      let data = response.data;
      data.map((element) => {
        console.log(element.title);
      });
      console.log(data[0].title); // Assuming you want to log the title of the first element
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  function handle() {
    setData(true);
    fetchApi();
  }

  return (
    <View>
      <Text>Fetch</Text>
      <Button title="Fetch Data" onPress={handle} />
    </View>
  );
};

export default Fetch;

const styles = StyleSheet.create({});


// const APIURL= "https://jsonplaceholder.typicode.com/posts/1"


// const fetchApi = async ()=>{
     
//    let  response = await axios.get(APIURL)
// }