import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Vibration,
  Pressable,
  Keyboard,
} from 'react-native';
import ResultImc from '../ResultImc';
import { styles } from './style';

export default function Form() {
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [resultImc, setResultImc] = useState(null);
  const [messageImc, setMessageImc] = useState('Preencha o campo');
  const [errorMessageImc, setErrorMessageImc] = useState(null);

  function CalculationImc() {
    let heightFormat = height.replace(',', '.');
    setResultImc((weight / (heightFormat * heightFormat)).toFixed(2));
  }

  function VerificationImc() {
    if (resultImc === null) Vibration.vibrate();
    setErrorMessageImc('Campo Obrigatório*');
    return;
  }

  function ValidationImc() {
    if (weight && height !== null) {
      CalculationImc();
      setWeight(null);
      setHeight(null);
      setMessageImc('Seu IMC é:');
      setErrorMessageImc(null);
      Keyboard.dismiss();
    } else {
      VerificationImc();
      setMessageImc('Preencha os campo* Altura e Peso');
      setResultImc(null);
    }
  }

  return (
    <View onPress={Keyboard.dismiss} style={styles.container}>
      {resultImc == null ? 
        <Pressable style={styles.Form}>
          <Text style={styles.LabelText}>Altura</Text>
          <Text style={styles.erroMessage}>{errorMessageImc}</Text>
          <TextInput
            style={styles.inputs}
            value={height}
            onChangeText={setHeight}
            placeholder="Ex: 1.70"
            keyboardType="numeric"
          ></TextInput>

          <Text style={styles.LabelText}>Peso</Text>
          <Text style={styles.erroMessage}>{errorMessageImc}</Text>

          <TextInput
            style={styles.inputs}
            value={weight}
            onChangeText={setWeight}
            placeholder="Ex: 70.365"
            keyboardType="numeric"
          ></TextInput>
          <TouchableOpacity
            style={styles.buttonColor}
            onPress={() => ValidationImc()}
          >
            <Text style={styles.textButtonColor}>{resultImc == null ? 'Calcular' : 'Calcular Novamente'}</Text>
          </TouchableOpacity>
        </Pressable>
       : 
        <View style={styles.exibitionImc}>
          <ResultImc resultImc={resultImc} messageImc={messageImc} />
          <TouchableOpacity
            style={styles.buttonColor}
            onPress={() => ValidationImc()}
          >
            <Text style={styles.textButtonColor}>{resultImc == null ? 'Calcular' : 'Calcular Novamente'}</Text>
          </TouchableOpacity>
        </View>
      }
    </View>
  );
}
