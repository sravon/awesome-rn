import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ComponentsScreen from './src/screens/ComponentsScreen';
import HomeScreens from './src/screens/HomeScreens';
import ListScreen from './src/screens/ListScreen';
import ImageScreens from './src/screens/ImageScreens';
// import CounterScreen from './src/screens/CounterScreen';
import CounterScreenReducer from './src/screens/CounterScreenReducer';
import ColorScreens from './src/screens/ColorScreens';
// import SquareScreen from './src/screens/SquareScreen';
import SquareScreen from './src/screens/SquareScreenReduce';
import TextScreens from './src/screens/TextScreens';

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer initialRouteName="Home">
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreens} />
        <Stack.Screen name="Components" component={ComponentsScreen} />
        <Stack.Screen name="ListS" component={ListScreen} />
        <Stack.Screen name="Image" component={ImageScreens} />
        <Stack.Screen name="Counter" component={CounterScreenReducer} />
        <Stack.Screen name="Color" component={ColorScreens} />
        <Stack.Screen name="Square" component={SquareScreen} />
        <Stack.Screen name="Texts" component={TextScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


