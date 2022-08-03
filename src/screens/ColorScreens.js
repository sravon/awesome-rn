import React, { useState } from 'react'
import { Button, FlatList, View } from 'react-native'
import Color from '../components/Color'

export default function ColorScreens() {
    const colorpic = Math.floor(Math.random() * 700000) + 1;
    const [color, setcolor] = useState([])
    console.log(color)
  return (
    <View>
        <Button
            onPress={ 
                () => 
                setcolor([...color,colorpic])
            }
            title="Counter"
        />
        <FlatList
            data={color}
            renderItem= { ({item}) =>{
                return <Color color={item}/>
            }}
        />
        
    </View>
  )
}
