import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text,TextInput, View } from 'react-native';
//import React from 'react';
import React,{useState} from 'react';

export default function App() {
  const [age, setAge] = useState("");
  const [limits, setlimits] = useState("no age set");

  const beatCalc = (age) => {
    var upper = (220-age)*0.65;
    var lower = (220-age)*0.85;

    setlimits(upper + "-" + lower);
  }

  return (
    <View style={styles.container}>
      <Text>age</Text>
      <TextInput 
        placeholder="no age set" 
        value={age} 
        keyboardType='decimal-pad'
        onChangeText={age => setAge(age)}/>
      <Button title="calc" onPress={beatCalc}/>
      <Text>limits</Text>
      <Text>{limits}</Text>
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
