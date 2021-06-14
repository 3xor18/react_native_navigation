import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {SettingScreens} from '../Screens/SettingScreens';
import {StackNavigator} from './StackNavigator';
import {TouchableOpacity, View} from 'react-native';
import {Image} from 'react-native';
import appStyles from '../theme/AppTheme';
import {Text} from 'react-native';
import {Tabs} from './Tabs';

const Drawer = createDrawerNavigator();

const MenuLateral = () => {
  return (
    <Drawer.Navigator drawerContent={props => <MenuInterno {...props} />}>
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingScreens" component={SettingScreens} />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({
  navigation,
}: DrawerContentComponentProps<DrawerContentOptions>) => {
  return (
    <DrawerContentScrollView>
      {/* Avatar */}
      <View style={appStyles.avatarContainer}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png',
          }}
          style={appStyles.avatar}
        />
      </View>
      {/* Opciones de menu */}
      <View style={appStyles.menuContaner}>
        <TouchableOpacity
          style={appStyles.menuBtn}
          onPress={() => navigation.navigate('Tabs')}>
          <Text style={appStyles.menuText}>NavegacionStack</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={appStyles.menuBtn}
          onPress={() => navigation.navigate('SettingScreens')}>
          <Text style={appStyles.menuText}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

export default MenuLateral;
