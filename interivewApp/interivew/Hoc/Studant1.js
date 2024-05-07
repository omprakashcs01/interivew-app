import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import higherOrderOuter from './higherOrderOuter'

const Studant1 = (props) => {

    // const [add , setAdd] =useState(0)

    // function handleData(){
    //     setAdd((prev)=> prev+10)
    // }
  return (
    <View>
        <Text>{props.add}</Text>
      <Button title='add '  
      onPress={ props.handleData}/>
    </View>
  )
}

export default higherOrderOuter(Studant1)

const styles = StyleSheet.create({})