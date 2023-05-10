import React, { Component } from 'react';
import * as Progress from 'react-native-progress';
import {
    SafeAreaView,
    ScrollView,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ImageBackground
  } from 'react-native';
import AnimatedTouchableOpacity from './button';
  const QuizMenu = ({navigation}) => {
    return (
      <ImageBackground source={require('./BG2.jpg')} resizeMode="cover" style={styles.image}>
          <Text style={styles.title}>QUIZ</Text>
          <AnimatedTouchableOpacity title='PERKALIAN' onPress={() => navigation.navigate("LevelScreenPerkalian")}></AnimatedTouchableOpacity>
          <AnimatedTouchableOpacity title='PEMBAGIAN' onPress={() => navigation.navigate("LevelScreenPembagian")}></AnimatedTouchableOpacity>
      </ImageBackground>
    );
  };
  const styles = StyleSheet.create({
    image: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      backgroundColor: '#BDB2FF',
      borderRadius: 30,
      padding: 10,
      width: 200,
      marginBottom: 25,
      marginTop: 5,
    },
    title: {
      fontSize: 20,
      marginBottom: 20,
      textAlign: 'center',
      color: '#154198',
      fontWeight: 'bold',
    },
    buttonText: {
      fontSize: 18,
      color: '#154198',
      textAlign: 'center',
      fontWeight: 'bold',
    },
  });

  export default QuizMenu;