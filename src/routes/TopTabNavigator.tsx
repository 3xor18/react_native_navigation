import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ContatcsScreen} from '../Screens/ContactsScreen';
import {AlbumScreen} from '../Screens/AlbunScreen';
import {ChatScreen} from '../Screens/ChatScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colores} from '../theme/AppTheme';
import {Text} from 'react-native';
const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  const {top: paddingTop} = useSafeAreaInsets();
  return (
    <Tab.Navigator
      style={{paddingTop}}
      sceneContainerStyle={{backgroundColor: 'white'}}
      tabBarOptions={{
        pressColor: colores.primary,
        showIcon: true,
        indicatorStyle: {
          backgroundColor: colores.primary,
        },
        style: {
          shadowColor: 'transparent',
          elevation: 0,
        },
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Chats':
              iconName = 'CH';
              break;

            case 'Contats':
              iconName = 'CT';
              break;

            case 'Album':
              iconName = 'Al';
              break;

            default:
              iconName = 'nones';
              break;
          }
          return <Text style={{color}}>{iconName}</Text>;
        },
      })}>
      <Tab.Screen name="Chats" component={ChatScreen} />
      <Tab.Screen name="Contats" component={ContatcsScreen} />
      <Tab.Screen name="Album" component={AlbumScreen} />
    </Tab.Navigator>
  );
};
