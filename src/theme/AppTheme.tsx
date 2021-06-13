import {StyleSheet} from 'react-native';

const appStyles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  btnGrande: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  btnGrandeTexto: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  menuContaner: {
    marginVertical: 30,
    marginHorizontal: 50,
  },
  menuText: {
    fontSize: 20,
  },
  menuBtn: {
    marginVertical: 10,
  },
});

export default appStyles;
