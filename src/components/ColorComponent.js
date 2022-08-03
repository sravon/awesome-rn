import React from 'react'
import { Button, Text, View } from 'react-native'

export default function ColorComponent({color,onIncrease, onDecrease}) {
  return (
    <View>
        <Text>ColorComponent {color}</Text>
        <Button title={`Increase ${color}`}
          onPress={ () => onIncrease()}
        />
        <Button title={`Decrease ${color}`}
          onPress={ () => onDecrease()} 
        />
    </View>
  )
}
