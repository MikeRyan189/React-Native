import React, { useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { Configuration, OpenAIApi } from 'openai'
import {REACT_APP_API_KEY} from '@env'

export default function App() {
  const [ name, setName ] = useState('mike')
  const [ age, setAge ] = useState('28')
  const [ content, setContent ] = useState('')
  const [ response, setResponse ] = useState('')

  const config = new Configuration({
    apiKey: REACT_APP_API_KEY
  })
  
  const openai = new OpenAIApi(config)

  const chat = async () => {
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: content}],

  });
  setResponse(completion.data.choices[0].message.content)
  setContent('')
}

  return (
    <View style={styles.container}>
      <TextInput 
      multiline
      value = {content}
      style={styles.input}
      placeholder='Enter Prompt'
      onChangeText={(val)=>setContent(val)} />
      
      <View style={styles.buttonContainer}>
        <Button title='Chat' onPress={chat} />
      </View>
      <Text style={styles.text}>{response}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'pink',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  body: {
    backgroundColor: 'yellow',
    padding: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 777,
    padding: 8,
    margin: 10,
    width: 200,
  },
  text: {
    textAlign: 'center'
  }
});
