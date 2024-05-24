import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const fetchData = async(query) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const data = await response.json()
  console.log("data api ftech =>",data);
  return data;

}


export default fetchData

