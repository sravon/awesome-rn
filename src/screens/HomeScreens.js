import React from 'react'
import { View,StyleSheet, Text, Button, TouchableOpacity } from 'react-native'



export default function HomeScreens({navigation}) {
  const greeting = <Text style={styles.textStyle1}>Hello to you!</Text>
  return (
    <View>
      {greeting}
      <Button style={styles.textStyle}
        onPress={ () => navigation.navigate('Components')}
        title="Go to Components"
      />
      <Button style={styles.textStyle}
        onPress={ () => navigation.navigate('Image')}
        title="Go to ImageScreens"
      />
      <Button style={styles.textStyle}
        onPress={ () => navigation.navigate('Counter')}
        title="Go to Counter"
      />
      <Button style={styles.textStyle}
        onPress={ () => navigation.navigate('Square')}
        title="Go to Square"
      />
      <Button style={styles.textStyle}
        onPress={ () => navigation.navigate('Color')}
        title="Go to Color"
      />
      <Button style={styles.textStyle}
        onPress={ () => navigation.navigate('Texts')}
        title="Go to Texts"
      />
      <TouchableOpacity onPress={ () => navigation.navigate('ListS')}>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    textStyle: {
      fontSize: 35,
      paddingTop:30
    },
    textStyle1: {
      fontSize: 20,
      paddingTop:30
    }
})
