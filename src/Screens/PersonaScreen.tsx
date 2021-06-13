import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {useEffect} from 'react';
import {View, Text} from 'react-native';
import {RootStackParams} from '../routes/StackNavigator';
import appStyles from '../theme/AppTheme';

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {}

export default function PersonaScreen({route, navigation}: Props) {
  const params = route.params;
  useEffect(() => {
    navigation.setOptions({title: params.nombre});
  }, []);

  return (
    <View style={appStyles.globalMargin}>
      <Text style={appStyles.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
}
