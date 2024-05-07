import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import higherOrderOuter from './higherOrderOuter'

const Student2 = (props) => {
 
    // const [add , setAdd] =useState(0)

    // function handleData(){
    //     setAdd((prev)=> prev+10)
    // }
  return (
    <View>
        <Text>{props.add}</Text>
      <Button title='add 2 '  
      onPress={props.handleData}/>
    </View>
  )
}
export default higherOrderOuter(Student2)

const styles = StyleSheet.create({})