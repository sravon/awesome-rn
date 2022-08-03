import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'

export default function CounterScreen() {
    const [count, setcount] = useState(0)
    return (
        <View>
            <Button
                onPress={ () => setcount(count+1)}
                title="Increase"
            />
            <Button
                onPress={ () => setcount(count-1)}
                title="Decrease"
            />
            <Text>Count {count}</Text>
        </View>
     )
}
