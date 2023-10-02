
import { StyleSheet, View, Text} from 'react-native';
import Form from './src/components/Form';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Julio Nunes</Text>
      <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d2dae2',
    justifyContent: 'flex-end'
  },
  texto: {
  fontSize: 40,
 textAlign: 'center',
 fontWeight: 'bold',
 color: '#4B0082'
  }
});
