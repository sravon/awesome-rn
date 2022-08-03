import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function Thumbnails({image, text, score}) {
  return (
    <View style={styles.textStyle}>
        <Image source={image} style={{ width:150 , height:150}} />
        <View>
            <Text>{text}</Text>
            <Text>Image Score - {score}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    textStyle: {
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: "center",
        marginBottom: 10
    }
})