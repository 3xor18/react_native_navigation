import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1Screen} from '../Screens/Tab1Screen';
import {StackNavigator} from './StackNavigator';
import {colores} from '../theme/AppTheme';
import {Text} from 'react-native';
import {Platform} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {TopTabNavigator} from './TopTabNavigator';

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIos /> : <TabsAndroid />;
};

const BottonTabAndroid = createMaterialBottomTabNavigator();

function TabsAndroid() {
  return (
    <BottonTabAndroid.Navigator
      sceneAnimationEnabled={false}
      barStyle={{backgroundColor: colores.primary}}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1';
              break;

            case 'Tab2Screen':
              iconName = 'T2';
              break;

            case 'StackNavigator':
              iconName = 'StackNavigator';
              break;

            default:
              iconName = 'nones';
              break;
          }
          return <Text style={{color}}>{iconName}</Text>;
        },
      })}>
      <BottonTabAndroid.Screen
        name="Tab1Screen"
        component={Tab1Screen}
        options={{title: 'Tab1'}}
      />
      <BottonTabAndroid.Screen
        name="Tab2Screen"
        component={TopTabNavigator}
        options={{title: 'Tab2'}}
      />
      <BottonTabAndroid.Screen
        name="StackNavigator"
        component={StackNavigator}
        options={{title: 'Tab3'}}
      />
    </BottonTabAndroid.Navigator>
  );
}

const BottonTabIos = createBottomTabNavigator();

const TabsIos = () => {
  return (
    <BottonTabIos.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      tabBarOptions={{
        activeTintColor: colores.primary,
        style: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        labelStyle: {fontSize: 15},
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused, size}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1';
              break;

            case 'Tab2Screen':
              iconName = 'T2';
              break;

            case 'StackNavigator':
              iconName = 'StackNavigator';
              break;

            default:
              iconName = 'nones';
              break;
          }
          return <Text style={{color}}>{iconName}</Text>;
        },
      })}>
      <BottonTabIos.Screen
        name="Tab1Screen"
        component={Tab1Screen}
        options={{title: 'Tab1'}}
      />
      <BottonTabIos.Screen
        name="Tab2Screen"
        component={TopTabNavigator}
        options={{title: 'Tab2'}}
      />
      <BottonTabIos.Screen
        name="StackNavigator"
        component={StackNavigator}
        options={{title: 'Tab3'}}
      />
    </BottonTabIos.Navigator>
  );
};
