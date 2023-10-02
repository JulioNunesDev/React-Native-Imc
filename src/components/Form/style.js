import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '70%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop: 15,
  },
  Form: {
    height: 'auto',
    width: '100%',
    marginTop: 20,
    padding: 10,
  },

  LabelText: {
    fontSize: 22,
    paddingLeft: 20,
    color: '#000000',
    fontWeight: 'bold',
  },

  inputs: {
    height: 45,
    backgroundColor: '#ccc',
    borderRadius: 50,
    width: '90%',
    backgroundColor: '#f6f6f6',
    margin: 12,
    paddingLeft: 10,
  },
  buttonColor: {
    backgroundColor: '#6A5ACD',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    paddingTop: 14,
    paddingBottom: 14,
    margin: 30,
    borderRadius: 50,
  },
  textButtonColor: {
    color: '#ffff',
    fontSize: 17,
  },
});
