// In App.js in a new project
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Carousel2 } from './src/screens/Carousel2';
import { Details } from './src/screens/Details';
import { GalleryView } from './src/screens/GalleryView';
import { Home } from './src/screens/Home';


const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Carousel2">
        <Drawer.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Drawer.Screen name="Details" component={Details} options={{ headerShown: false }} />
        <Drawer.Screen name="GalleryView" component={GalleryView} options={{ headerShown: false }} />
        <Drawer.Screen name="Carousel2" component={Carousel2} options={{ headerShown: false }} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}

