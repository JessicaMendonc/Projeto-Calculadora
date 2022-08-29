import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';


export default function App() {
  const [primeiro, setPrimeiro] = useState(0);
  const [segundo, setSegundo] = useState(0);

  const x = parseFloat (primeiro);
  const y = parseFloat (segundo);

  const soma = x + y;
  const subtracao = parseInt (x - y);
  const divisao = Number (x / y).toFixed(2);
  const multiplicacao = x * y;


  return (
    <View style = {styles.container}>
      <Text style={styles.title}> Calculadora </Text>

      <TextInput
      keyboardType = "decimal-pad" 
      styele={styles.input} 
      value = {primeiro} 
      onChangeText={setPrimeiro} 
      ></TextInput>

      <TextInput
      keyboardType = "decimal-pad" 
      style={styles.input} 
      value = {segundo} 
      onChangeText={setSegundo} 
      ></TextInput>

      <Text style = {styles.subtitle}> Resultado </Text>

      <Text style = {styles.result} > {`Soma: ${soma}`} </Text>
      <Text style = {styles.result} > {`Subtração: ${subtracao}`} </Text>
      <Text style = {styles.result} > {`Divisão: ${divisao}`} </Text>
      <Text style = {styles.result} > {`Multiplicação: ${multiplicacao}`} </Text>
    </View>
  ) ;
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 36,
    fontWeight: '100',
  },

  input: {
    textAlign: 'center',
    alignSelf: 'stretch',
    marginHorizontal: 36,
    height: 50,
    fontSize: 30,
    fontWeight: '100',
    backgroundColor: '#DDD',
    marginTop: 20,
  },

  subtitle: {
    marginTop: 20,
    marginBottom: 20,
    fontWeight: 'bold',
    fontSize: 16,
  },

  result: {
    fontWeight: '100',
    fontSize: 24,
  },
}) ;


