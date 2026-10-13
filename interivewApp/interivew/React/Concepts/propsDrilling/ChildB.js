import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { data } from './Parent'

const ChildB = () => {
  return (
    <data.Consumer>
    {()=> {
        return(
            <View></View>
        )
    }}
    </data.Consumer>
  )
}

export default ChildB

const styles = StyleSheet.create({})