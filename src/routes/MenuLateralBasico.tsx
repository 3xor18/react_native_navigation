import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {SettingScreens} from '../Screens/SettingScreens';
import {StackNavigator} from './StackNavigator';
import {useWindowDimensions} from 'react-native';

const Drawer = createDrawerNavigator();

const MenuLateralBasico = () => {
  const {width, height} = useWindowDimensions();
  return (
    <Drawer.Navigator drawerType={width >= 768 ? 'permanent' : 'front'}>
      <Drawer.Screen
        name="StackNavigator"
        options={{title: 'Home'}}
        component={StackNavigator}
      />
      <Drawer.Screen
        name="SettingScreens"
        options={{title: 'Settings'}}
        component={SettingScreens}
      />
    </Drawer.Navigator>
  );
};

export default MenuLateralBasico;
