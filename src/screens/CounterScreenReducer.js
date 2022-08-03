import React, { useReducer, useState } from 'react'
import { Button, Text, View } from 'react-native'

const Reducer = (state, action) => {
    switch (action.valueInOrOut) {
        case 'increase':
            return {...state,count: state.count + 1};
        case 'decrease':
            return {...state,count: state.count - 1};    
        default:
            return state;
    }
}

export default function CounterScreenReducer() {
    const [state, dispatch] = useReducer(Reducer, {count: 5})
    return (
        <View>
            <Text>Control from reducer</Text>
            <Button
                onPress={ () => dispatch({valueInOrOut:'increase'})}
                title="Increase"
            />
            <Button
                onPress={ () => dispatch({valueInOrOut:'decrease'})}
                title="Decrease"
            />
            <Text>Count {state.count}</Text>
            <Text>Control from reducer</Text>
        </View>
     )
}
