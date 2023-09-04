import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text,TextInput, View } from 'react-native';
//import React from 'react';
import React,{useState} from 'react';

export default function App() {
  const [age, setAge] = useState(0);
  const [loLimits, setLoLimits] = useState(0);
  const [hiLimits, setHiLimits] = useState(0);

  const beatCalc = () => {
    var upper = (220-age)*0.65;
    var lower = (220-age)*0.85;

    setHiLimits(upper);
    setLoLimits(lower);
  }

  return (
    <View style={styles.container}>
      <Text>age</Text>
      <TextInput 
        placeholder="0" 
        value={age.toString()} 
        onChangeText={text => setAge(text)}
        keyboardType='numeric'/>
      <Text>limits</Text>
      <Text>{loLimits.toFixed(0)}-{hiLimits.toFixed(0)}</Text>
      <Button title="calc" onPress={beatCalc}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
