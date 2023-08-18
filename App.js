import React, {useState} from 'react';

import { Text, SafeAreaView, StyleSheet, View, TextInput, Button, TouchableOpacity } from 'react-native';



export default function App() {

function CalculoCombustivel(){
  alert('Seu carro percorre '+resultado+'Km por litro.')
}

  const [km, setKm] = useState('');
  const [combu, setCombu] = useState('');
  const resultado = km / combu;


  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.titulo}>
        Consumo de combustivel
      </Text>

      <TextInput style={styles.input}
        onChangeText={(km)=>setKm(km)}
        placeholder="Digite os Km percorridos."
        placeholderTextColor='#000' keyboardType='numeric'
      />
      <TextInput style={styles.input}
        onChangeText={(combu)=>setCombu(combu)}
        placeholder="Insira o Consumo em Litros."
        placeholderTextColor='#000'
         keyboardType='numeric'
      />

      <TouchableOpacity style={styles.btn} onPress={CalculoCombustivel} >
        <Text style={styles.textobtn}> Calcular o Consumo 
        </Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
  titulo: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  input: {
    fontsize: 25,
    padding: 25,
    color: '#000',
    backgroundColor: '#a0c225',
    borderRadius: 15,
    margin: 15,
    fontWeight: 400
  },
  btn: {
    alignItems: 'center',
    backgroundColor: '#ff0000',
    padding: 20,
    borderRadius: 10,
    marginTop: 50
  },
  textobtn: {
    fontsize: 30,
    color: '#fff'
  }
});
