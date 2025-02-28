import { StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native'
import React from 'react'

interface proptype{
  text:string|number,
  style:StyleProp<TextStyle>
  
} 

const TextContainer = () => {
  return (
    <View>
      <Text>TextContainer</Text>
    </View>
  )
}

export default TextContainer

const styles = StyleSheet.create({})