import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import ResultImc from '../ResultImc';
import { styles } from './style';

export default function Form() {
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [resultImc, setResultImc] = useState(null);
  const [messageImc, setMessageImc] = useState('Preencha o campo');

  function CalculationImc() {
    setResultImc((weight / (height * height)).toFixed(2));
  }

  function ValidationImc() {
    if (weight && height !== null) {
      CalculationImc();
      setWeight(null);
      setHeight(null);
      setMessageImc('Seu IMC é:');
      return;
    }
    setMessageImc('Preencha os campo* Altura e Peso');
    setResultImc(null);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Form}>
        <Text style={styles.LabelText}>Altura</Text>
        <TextInput
          style={styles.inputs}
          value={height}
          onChangeText={setHeight}
          placeholder="Ex: 1.70"
          keyboardType="numeric"
        ></TextInput>


        <Text style={styles.LabelText}>Peso</Text>
        <TextInput style={styles.inputs }
          value={weight}
          onChangeText={setWeight}
          placeholder="Ex: 70.365"
          keyboardType="numeric"
        ></TextInput>
        <TouchableOpacity style={styles.buttonColor}
          onPress={() => ValidationImc()}
        >
          <Text style={styles.textButtonColor}>
            Calcular
          </Text>

        </TouchableOpacity>
      </View>
      <ResultImc resultImc={resultImc} messageImc={messageImc} />
    </SafeAreaView>
  );
}
