import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MenuLateralBasico from './src/routes/MenuLateralBasico';
import MenuLateral from './src/routes/MenuLateral';

export default function App() {
  return (
    <NavigationContainer>
      <MenuLateral />
    </NavigationContainer>
  );
}
