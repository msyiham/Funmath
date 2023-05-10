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
  const Materi = ({navigation}) => {
    return (
        <ImageBackground source={require('./BG2.jpg')} resizeMode="cover" style={styles.image}>
            <Text style={styles.title}>MATERI</Text>
            <AnimatedTouchableOpacity title='Materi Perkalian' onPress={() => navigation.navigate("MateriPerkalian")}></AnimatedTouchableOpacity>
            <AnimatedTouchableOpacity title='Materi Pembagian' onPress={() => navigation.navigate("MateriPembagian")}></AnimatedTouchableOpacity>
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

  export default Materi;