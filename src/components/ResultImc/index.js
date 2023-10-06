import { View, Text, TouchableOpacity, Share } from 'react-native';
import { styles } from './style';

export default function ResultImc(props) {
  async function onShare() {
    const resultShare = await Share.share({
      message: 'Meu imc hoje é: ' + props.resultImc,
      title: 'App Imc, feito pelo Julio Nunes',
    });
  }
  return (
    <View style={styles.resultImc}>
      <View style={styles.boxSharedButton}>
        <Text style={styles.informationImc}>{props.messageImc}</Text>
        <Text style={styles.numberImc}>{props.resultImc}</Text>
        <TouchableOpacity onPress={() => onShare()} style={styles.sharedButton}>
          <Text style={styles.sharedText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
