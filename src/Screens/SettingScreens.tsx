import React from 'react';
import {Text} from 'react-native';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const SettingScreens = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{marginTop: insets.top}}>
      <Text>Setting Screen</Text>
    </View>
  );
};
