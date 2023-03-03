import React, { useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';


export default function Header() {
    
    return (
      <View style={styles.header}>
      <View style={styles.title}>My Todos</View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    header: {
      height: 80,
      paddingTop: 38,
      backgroundColor: 'coral'
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
        
    }
  });
  