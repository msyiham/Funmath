import React, { Component } from 'react';
import * as Progress from 'react-native-progress';
import {
    SafeAreaView,
    ScrollView,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    ImageBackground,
    View,
  } from 'react-native';
import AnimatedTouchableOpacity from './button';
  const Pencapaian = ({navigation}) => {
    return (
      <ImageBackground source={require('./BG4.jpg')} resizeMode="cover" style={styles.image}>
          <Text style={styles.title}>PENCAPAIAN</Text>
          <View style={styles.card}>
            <Text style={styles.isi}>Pencapaian Total</Text>
            <Progress.Bar progress={0.3} width={300} height={20} borderRadius={10} color={'#5aa9e6'} style={styles.progress}/>
            <Text style={styles.pencapaian}>1 % Pencapaian</Text>

            <Text style={styles.isi}>Pencapaian Perkalian</Text>
            <Progress.Bar progress={0.3} width={300} height={20} borderRadius={10}  color={'#ff70a6'} style={styles.progress}/>
            <Text style={styles.pencapaian}>1 % Pencapaian</Text>
          
            <Text style={styles.isi}>Pencapaian Pembagian</Text>
            <Progress.Bar progress={0.3} width={300} height={20} borderRadius={10}  color={'#ff69eb'} style={styles.progress}/>
            <Text style={styles.pencapaian}>1 % Pencapaian</Text>
          </View>
            
            
            <Text style={styles.isi2}>Tambah Progress Dengan Selesaikan Quiz</Text>
            <Text style={styles.isi2}>Semangat!!</Text>
            <Text style={styles.isi3}>Quiz disini</Text>
            <AnimatedTouchableOpacity title='KLIK' onPress={() => navigation.navigate("Quiz")}></AnimatedTouchableOpacity>
            
      </ImageBackground>

    );
  };
  const styles = StyleSheet.create({
    image: {
      flex: 1,
      alignItems: 'center',
    },
    card:{
      alignItems: 'center',
      backgroundColor: 'white',
      width: 350,
      padding: 10,
      borderRadius: 8,
      borderColor: '#154198',
      borderWidth: 2,
    },
    title: {
      fontSize: 30,
      marginBottom: 25,
      textAlign: 'center',
      color: '#154198',
      fontWeight: 'bold',
    },
    isi: {
      fontSize: 25,
      marginBottom: 10,
      textAlign: 'center',
      color: '#7161ef',
      fontWeight: 'bold',
    },
    isi2: {
      fontSize: 25,
      marginBottom: 10,
      marginTop: 20,
      textAlign: 'center',
      color: '#154198',
      fontWeight: '500',
    },
    pencapaian: {
      fontSize: 18,
      color: '#957fef',
      textAlign: 'center',
      fontWeight: '600',
    },
    isi3: {
      fontSize: 18,
      color: '#154198',
      textAlign: 'center',
    },
    progress: {
      marginTop: 10,
      marginBottom: 10,
      width: 200,
    },
  });

  export default Pencapaian;