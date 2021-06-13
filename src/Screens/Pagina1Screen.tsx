import {DrawerScreenProps} from '@react-navigation/drawer';
import React from 'react';
import {useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Text, Button} from 'react-native';
import appStyles from '../theme/AppTheme';

interface Props extends DrawerScreenProps<any, any> {}

export default function Pagina1Screen({navigation}: Props) {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button onPress={() => navigation.toggleDrawer()} title="menu" />
      ),
    });
  }, []);

  return (
    <View style={appStyles.globalMargin}>
      <Text style={appStyles.title}>Pagina1Screen</Text>
      <Button
        onPress={() => navigation.navigate('Pagina2Screen')}
        title="Ir a pagina 2"
      />
      <Text>Navegar con Argumentos</Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{...appStyles.btnGrande, backgroundColor: 'blue'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {id: 1, nombre: 'pedro'})
          }>
          <Text style={appStyles.btnGrandeTexto}>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={appStyles.btnGrande}
          onPress={() =>
            navigation.navigate('PersonaScreen', {id: 2, nombre: 'Gerson'})
          }>
          <Text style={appStyles.btnGrandeTexto}>Gerson</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
