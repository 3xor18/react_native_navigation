import React from 'react';
import {useContext} from 'react';
import {Text} from 'react-native';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AuthContext} from '../context/AuthContext';

export const SettingScreens = () => {
  const insets = useSafeAreaInsets();

  const {authState} = useContext(AuthContext);

  return (
    <View style={{marginTop: insets.top}}>
      <Text>{JSON.stringify(authState, null, 4)}</Text>
    </View>
  );
};
