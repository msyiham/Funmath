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
  const MateriPembagianScreen = ({navigation}) => {

    return (
        <ImageBackground source={require('./BG2.jpg')} resizeMode="cover" style={styles.image}>
            <ScrollView>
                <Text style={styles.title}>MATERI PEMBAGIAN</Text>
                <Text style={styles.isi4}>20 : 4 = 5</Text>
                <Image source={require('./pembagian2.png')} resizeMode="contain" style={styles.image2}></Image>
                    <View style={styles.container}>
                        <Text style={styles.isi}>Pada gambar di atas, kita melihat sebuah lingkaran yang sudah dibagi menjadi 4 bagian yang sama. Setiap bagian lingkaran ini memiliki 5 buah apel di dalamnya.{"\n"}Kita ingin mengetahui berapa banyak apel yang ada di lingkaran secara keseluruhan. Kita dapat menggunakan pembagian untuk menyelesaikan masalah ini.{"\n"}Jumlah total apel = 5 apel x 4 bagian = 20 apel.{"\n"}Ini berarti, jika kita membagi 20 apel ke dalam 4 bagian yang sama, setiap bagian akan memiliki 5 buah apel.{"\n"}Jadi 20 : 4 = 5{"\n"}</Text>
                        <AnimatedTouchableOpacity title="Kembali" onPress={() => navigation.navigate("Materi")} ></AnimatedTouchableOpacity>
                    </View>
            </ScrollView>
        </ImageBackground>
    );
  };
  const styles = StyleSheet.create({
    image: {
      flex: 1,
      alignItems: 'center',
    },
    container: {
      width: 400,
      alignItems: 'center',
    },
    image2: {
        top: -50
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
      left: 2,
    },
    isi2: {
      fontSize: 15,
      marginBottom: 50,
      textAlign: 'justify',
      color: '#9c47a1',
      fontWeight: 'bold',
      top: 30,
      left: 0,
    },
    isi4: {
      fontSize: 30,
      marginBottom: 10,
      textAlign: 'justify',
      color: 'red',
      fontWeight: 'bold',
      top: 410,
      left: 80,
    },
    card:{
        alignItems: 'center',
        backgroundColor: '#FFADAD',
        padding: 10,
        borderRadius: 8,
        borderColor: '#BDB2FF',
        borderWidth: 10,
      },
    cardText:{
        alignItems: 'center',
        backgroundColor: '#FDFFB6',
        padding: 10,
        borderRadius: 8,
        borderColor: '#BDB2FF',
        borderWidth: 2,
        width: '100%'
      },
  });

  export default MateriPembagianScreen;