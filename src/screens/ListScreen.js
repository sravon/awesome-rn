import React from 'react'
import { FlatList, StyleSheet, Text } from 'react-native'

export default function ListScreen() {
    const friends = [
      { name : 'Friend #1', age : 10 },
      { name : 'Friend #2', age : 20  },
      { name : 'Friend #3', age : 30  },
      { name : 'Friend #4', age : 40  },
      { name : 'Friend #5', age : 50  }
    ]

  return (
    <FlatList
        
        keyExtractor={index => index.name }
        data={friends}
        renderItem={({ item }) => {
            return <Text style={{ fontSize: 30}}>{item.name}</Text>
        }}
    />
  )
}

const styles = StyleSheet.create({})
