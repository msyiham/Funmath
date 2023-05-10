import React, { Component, useEffect, useState } from 'react';
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
import AnimatedTouchableOpacity from '../button';
  const MateriPerkalian = ({navigation}) => {

    return (
        <ImageBackground source={require('./BG2.jpg')} resizeMode="cover" style={styles.image}>
            <View style={styles.container}>
                <ScrollView>
                  <View style={{width:390}}>
                    <Text style={styles.title}>PERKALIAN</Text>
                    <Text style={styles.isi4}>3 x 7 = 21</Text>
                    <Image source={require('./perkalian2.png')} resizeMode="contain" style={styles.image2}></Image>
                    <Text style={styles.isi}>Berdasarkan gambar diatas, ada 3 tangkai rambutan. Setiap tangkai memiliki 7 biji rambutan. Untuk menghitung jumlah biji rambutan digambar ini, kita bisa mengalikan angka 3 dengan angka 7</Text>
                    <Text style={styles.isi}>Jadi dapat diketahui operasi perkalian bilangan seperti dibawah ini :</Text>
                    <Text style={styles.isi}>- 1 x 7 = 7 digambarkan pada gambar ke 1 tangkai rambutan</Text>
                    <Text style={styles.isi}>- 2 x 7 = 14 digambarkan pada gambar ke 2 tangkai rambutan</Text>
                    <Text style={styles.isi2}>- 3 x 7 = 21 digambarkan pada gambar tangkai rambutan</Text>  
                  </View>
                </ScrollView>
                <AnimatedTouchableOpacity title="Kembali" onPress={() => navigation.navigate("Materi")} ></AnimatedTouchableOpacity>
            </View>
        </ImageBackground>
    );
  };
  const styles = StyleSheet.create({
    image: {
      flex: 1,
      alignItems: 'center',
    },
    container: {
      flex: 1,
      alignItems: 'center',
    },
    image2: {
        width: 600,
        height: 200,
        top: 0,
        left: -110
    },
    button: {
      borderRadius: 10,
      backgroundColor: '#BDB2FF',
    },
    title: {
      fontSize: 25,
      marginTop: 10,
      textAlign: 'center',
      color: '#154198',
      fontWeight: 'bold',
    },
    buttonText: {
      fontSize: 15,
      marginBottom: 10,
      textAlign: 'justify',
      color: '#154198',
      fontWeight: 'bold',
    },
    isi: {
      fontSize: 20,
      marginBottom: 10,
      textAlign: 'justify',
      color: '#9c47a1',
      fontWeight: '500',
      top: 30,
      left: 0,
    },
    isi2: {
      marginBottom: 50,
      fontSize: 20,
      textAlign: 'justify',
      color: '#9c47a1',
      fontWeight: '500',
      top: 30,
      left: 0,
    },
    isi4: {
      fontSize: 30,
      marginBottom: 10,
      textAlign: 'justify',
      color: 'red',
      fontWeight: 'bold',
      top: 50,
      left: 10,
    },

  });

  export default MateriPerkalian;