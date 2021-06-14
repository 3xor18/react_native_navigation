import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import appStyles from '../theme/AppTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const Tab1Screen = () => {
  const {top: marginTop} = useSafeAreaInsets();

  useEffect(() => {}, []);

  return (
    <View style={{...appStyles.globalMargin, marginTop}}>
      <Text style={appStyles.title}>Iconos</Text>
      <Icon name="airplane-outline" size={50} color="#900" />
    </View>
  );
};
