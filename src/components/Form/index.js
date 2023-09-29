import React, { useState } from 'react';
import { View, Text, TextInput, Button, SafeAreaView } from 'react-native';
import ResultImc from '../ResultImc';

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
    <SafeAreaView>
      <View>
        <Text>Altura</Text>
        <TextInput
          value={height}
          onChangeText={setHeight}
          placeholder="Ex: 1.70"
          keyboardType="numeric"
        ></TextInput>
        <Text>Peso</Text>
        <TextInput
          value={weight}
          onChangeText={setWeight}
          placeholder="Ex: 70.365"
          keyboardType="numeric"
        ></TextInput>
        <Button
          onPress={() => ValidationImc()}
          title={ValidationImc ? 'Calcular' : 'Calcular Novamente'}
        />
      </View>
      <ResultImc resultImc={resultImc} messageImc={messageImc} />
    </SafeAreaView>
  );
}
