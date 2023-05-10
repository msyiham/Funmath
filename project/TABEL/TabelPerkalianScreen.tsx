import React from 'react';
import {
    StyleSheet,
    Text,
    View,
  } from 'react-native';
import TabelPerkalian from './Perkalian';
  const MenUPerkalian = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>TABEL PERKALIAN</Text>
        <TabelPerkalian></TabelPerkalian>
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFC6FF',
    },
    title: {
      fontSize: 30,
      marginBottom: 10,
      textAlign: 'center',
      color: '#154198',
      fontWeight: 'bold',
    },
  });

  export default MenUPerkalian;