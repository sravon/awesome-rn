import React, { useState } from 'react'
import { Text, View } from 'react-native'
import ColorComponent from '../components/ColorComponent'

const COLOR_INCREMENT = 10
export default function SquareScreen() {
  const [red, setred] = useState(0)
  const [green, setgreen] = useState(0)
  const [blue, setblue] = useState(0)

  const setColor = (color, change) => {
    switch (color) {
      case 'red':
        (red + change > 255 || red + change < 0)?null:setred(red + change)
        break;
      case 'green':
        (green + change > 255 || green + change < 0)?null:setgreen(green + change)
        break;
      case 'blue':
        (blue + change > 255 || blue + change < 0)?null:setblue(blue + change)
        break;
      default:
        break;
    }
    
  }
  return (
    <View>
        <ColorComponent 
          onIncrease={ () => setColor('red', COLOR_INCREMENT)}
          onDecrease={ () => setColor('red', -1*COLOR_INCREMENT)}
          color="Red"
        />
        <ColorComponent
          onIncrease={ () => setColor('green', COLOR_INCREMENT)}
          onDecrease={ () => setColor('green', - 1*COLOR_INCREMENT)} 
          color="Green"
        />
        <ColorComponent
          onIncrease={ () => setColor('blue', COLOR_INCREMENT)}
          onDecrease={ () => setColor('blue', - 1*COLOR_INCREMENT)} 
          color="Blue"
        />
        <View
          style={{height: 150,width:150,backgroundColor:`rgb(${red},${green},${blue})`}}
        ></View>
    </View>
  )
}
