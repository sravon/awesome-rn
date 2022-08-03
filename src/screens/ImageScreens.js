import React from 'react'
import { Text, View } from 'react-native'
import Thumbnails from '../components/Thumbnails'

export default function ImageScreens() {
  return (
    <View>
        <Thumbnails image={require(`../../assets/image1.jpg`)} text="text" score="9" />
        <Thumbnails image={require(`../../assets/image2.jpg`)} text="text2" score="10"/>
        <Thumbnails image={require(`../../assets/image3.jpg`)} text="text3" score="11"/>
    </View>
  )
}
