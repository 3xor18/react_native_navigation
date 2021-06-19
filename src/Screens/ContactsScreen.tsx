import React, {useContext} from 'react';
import {Text, View, Button} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import appStyles from '../theme/AppTheme';

export const ContatcsScreen = () => {
  const {singIn, authState} = useContext(AuthContext);

  return (
    <View style={appStyles.globalMargin}>
      <Text style={appStyles.title}>ContatcsScreen</Text>
      {!authState.isLoggedIn && <Button title="Click" onPress={singIn} />}
    </View>
  );
};
