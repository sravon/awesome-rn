import React, { useState } from 'react'
import { View,TextInput } from 'react-native'

export default function TextScreens() {
    const [name, setname] = useState("")
  return (
    <View>
        <TextInput style={{margin:15,borderColor:'red',borderWidth:1}}
            autoCapitalize="none"
            autoCorrect={false}
            value={name}
            onChangeText={(value) => setname(value)}
        />
    </View>
  )
}
