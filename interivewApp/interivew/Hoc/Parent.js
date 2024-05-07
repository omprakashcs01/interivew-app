import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Studant1 from './Studant1'
import Student2 from './Student2'

const Parent = () => {
  return (
    <View>
      <Text>Parant</Text>
      <Studant1/>
      <Student2/>
    </View>
  )
}

export default Parent

const styles = StyleSheet.create({})