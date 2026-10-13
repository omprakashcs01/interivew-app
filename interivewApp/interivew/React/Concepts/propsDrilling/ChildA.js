import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ChildB from './ChildB'

const ChildA = () => {
  return (
    <View>
     <ChildB/>
    </View>
  )
}

export default ChildA

const styles = StyleSheet.create({})