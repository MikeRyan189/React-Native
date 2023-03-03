import React, { useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import Header from './Header'
import TodoItem from './TodoItem'
import AddTodo from './AddTodo'


export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1'},
    { text: 'create an app', key: '2'},
    { text: 'go to gym', key: '3'}
  ])

  const pressHandler = (key) =>{
    setTodos((todos) =>{
      return todos.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (text) =>{
    setTodos((todos) =>{
      return [{text: text, key: Math.random().toString()}, ...todos]
    })
  }

  return (
    <View style={styles.container}>
      <Header />
    <View style={styles.content}>
      <AddTodo submitHandler={submitHandler} />
    </View>
    <View style={styles.list}>
      <FlatList 
      data={todos}
      renderItem={({ item })=> (
        <TodoItem item={item} pressHandler={pressHandler} />
      )}
      />

    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    
  },
  header: {
    backgroundColor: 'pink',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  }
});
