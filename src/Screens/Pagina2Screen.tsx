import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import appStyles from '../theme/AppTheme';

export default function Pagina2Screen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: 'Hola Mundo',
      headerBackTitle: 'Atras',
    });
  }, []);

  return (
    <View style={appStyles.globalMargin}>
      <Text style={appStyles.title}>Pagina2Screen</Text>
      <Button
        onPress={() => navigation.navigate('Pagina3Screen')}
        title="Ir a pagina 3"
      />
    </View>
  );
}
