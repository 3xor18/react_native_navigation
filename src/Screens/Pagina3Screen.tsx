import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text, Button} from 'react-native';
import appStyles from '../theme/AppTheme';

interface Props extends StackScreenProps<any, any> {}

export default function Pagina3Screen({navigation}: Props) {
  return (
    <View style={appStyles.globalMargin}>
      <Text style={appStyles.title}>Pagina3Screen</Text>
      <Button onPress={() => navigation.popToTop()} title="Ir Home" />
      <Button onPress={() => navigation.pop()} title="Regresar" />
    </View>
  );
}
