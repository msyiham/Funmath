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
    const [showText1, setShowText1] = useState(false);
    const [showText2, setShowText2] = useState(false);
    const [showText3, setShowText3] = useState(false);
    const [showText4, setShowText4] = useState(false);
    const [showButton, setshowButton] = useState(false);
  
    useEffect(() => {
      setTimeout(() => {
        setShowText1(true);
      }, 1000); // delay 5 detik untuk teks 1
      setTimeout(() => {
        setShowText2(true);
      }, 2000); // delay 10 detik untuk teks 2
      setTimeout(() => {
        setShowText3(true);
      }, 3000); // delay 15 detik untuk teks 3
      setTimeout(() => {
        setShowText4(true);
      }, 4000); // delay 20 detik untuk teks 4
      setTimeout(() => {
        setshowButton(true);
      }, 6000); // delay 20 detik untuk teks 4
    }, []);
    return (
        <ImageBackground source={require('./BG2.jpg')} resizeMode="cover" style={styles.image}>
            <View style={styles.container}>
                <Text style={styles.title}>PERKALIAN</Text>
                <Image source={require('./perkalian2.png')} resizeMode="contain" style={styles.image2}></Image>
                {showText1 && <Text style={styles.isi}>7</Text>}
                {showText2 && <Text style={styles.isi2}>+    7 </Text>}
                {showText3 && <Text style={styles.isi3}>+    7</Text>}
                {showText4 && <Text style={styles.isi4}>3 x 7 = 21</Text>}

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("MateriPerkalianScreen")}>
                  {showButton && <Text style={styles.buttonText}>LIHAT PENJELASAN</Text>}
                </TouchableOpacity>
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
        top: 200
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
      fontSize: 30,
      marginBottom: 10,
      textAlign: 'justify',
      color: '#9c47a1',
      fontWeight: 'bold',
      top: 175,
      left: -120,
    },
    isi2: {
      fontSize: 30,
      marginBottom: 10,
      textAlign: 'justify',
      color: '#9c47a1',
      fontWeight: 'bold',
      top: 120,
      left: -20,
    },
    isi3: {
      fontSize: 30,
      marginBottom: 10,
      textAlign: 'justify',
      color: '#9c47a1',
      fontWeight: 'bold',
      top: 60,
      left: 85,
    },
    isi4: {
      fontSize: 35,
      marginBottom: 10,
      textAlign: 'justify',
      color: 'red',
      fontWeight: 'bold',
      top: -180,
      left: 10,
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

  export default MateriPerkalian;