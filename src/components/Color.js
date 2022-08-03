import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function Color({ color }) {
    jewelStyle = function(options) {
        return {
            width: 100,height:100,
            backgroundColor:`#${options}`,
        }
    }
    return (
        <View style={jewelStyle(color)}>
            <Text>{color}</Text>
        </View>
    )
}

