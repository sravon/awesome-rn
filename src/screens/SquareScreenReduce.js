import React, { useReducer, useState } from 'react'
import { Text, View } from 'react-native'
import ColorComponent from '../components/ColorComponent'

  const COLOR_INCREMENT = 10
  const reducer = (state, action) => {
    // state === {red: 0,green:0,blue:0}
    // action === { colortochange: 'red' || 'green' || 'blue', amount:15 || -15}
    //(red + change > 255 || red + change < 0)?null:setred(red + change)
    switch (action.colorToChange) {
      case 'red':
        return state.red + action.amount > 255 || state.red + action.amount < 0 
            ? state : {...state, red:state.red + action.amount
          };
      case 'green':
        return {...state, green:state.green + action.amount};
      case 'blue':
        return {...state, blue:state.blue + action.amount};
      default:
        return state;
    }
  }


export default function SquareScreenReduce() {
  const [state, dispatch] = useReducer(reducer, {red: 0,green:0,blue:0})  


  
  return (
    <View>
        <ColorComponent 
          onIncrease={ () => dispatch({colorToChange: 'red', amount: COLOR_INCREMENT})}
          onDecrease={ () => dispatch({colorToChange: 'red', amount: -1*COLOR_INCREMENT})}
          color="Red"
        />
        <ColorComponent
          onIncrease={ () => dispatch({colorToChange: 'green', amount: COLOR_INCREMENT})}
          onDecrease={ () => dispatch({colorToChange: 'green', amount: -1*COLOR_INCREMENT})} 
          color="Green"
        />
        <ColorComponent
          onIncrease={ () => dispatch({colorToChange: 'blue', amount: COLOR_INCREMENT})}
          onDecrease={ () => dispatch({colorToChange: 'blue', amount: -1*COLOR_INCREMENT})} 
          color="Blue"
        />
        <View
          style={{height: 150,width:150,backgroundColor:`rgb(${state.red},${state.green},${state.blue})`}}
        ></View>
    </View>
  )
}
