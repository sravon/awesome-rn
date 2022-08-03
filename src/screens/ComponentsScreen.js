import React from 'react'
import { StyleSheet, Text } from 'react-native'

export default function ComponentsScreen() {
  return (
    <Text style={styles.textStyle}>ComponentsScreen</Text>
  )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        paddingTop:30
    }
})
