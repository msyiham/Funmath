import React, { Component } from 'react';
import * as Progress from 'react-native-progress';
import {
    ImageBackground,
    StyleSheet,
    Text
  } from 'react-native';
import AnimatedTouchableOpacity from './button';
  const Tabel = ({navigation}) => {
    return (
      <ImageBackground source={require('./BG2.jpg')} resizeMode="cover" style={styles.image}>
          <Text style={styles.title}>TABEL</Text>
          <AnimatedTouchableOpacity title='PERKALIAN' onPress={() => navigation.navigate("TabelPerkalian")}></AnimatedTouchableOpacity>
          <AnimatedTouchableOpacity title='PEMBAGIAN' onPress={() => navigation.navigate("TabelPembagian")}></AnimatedTouchableOpacity>   
      </ImageBackground>
    );
  };
  const styles = StyleSheet.create({
    image: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 20,
      marginBottom: 20,
      textAlign: 'center',
      color: '#154198',
      fontWeight: 'bold',
    },
  });

  export default Tabel;