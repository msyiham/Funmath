import React, { useEffect, useState} from 'react';
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
  const MateriPembagian = ({navigation}) => {
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
        setshowButton(true);
      }, 4000); // delay 20 detik untuk teks 4
    }, []);
    return (
        <ImageBackground source={require('./BG2.jpg')} resizeMode="cover" style={styles.image}>
            <View style={styles.container}>
                <Text style={styles.title}>PEMBAGIAN</Text>
                <Image source={require('./pembagian2.png')} style={styles.image2}></Image>
                {showText1 && <Text style={styles.isi}>20</Text>}
                {showText2 && <Text style={styles.isi2}>5 </Text>}
                {showText3 && <Text style={styles.isi3}>20 : 4 = 5</Text>}

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("MateriPembagianScreen")}>
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
        width: 400,
    },
    title: {
      fontSize: 25,
      marginTop: 5,
      textAlign: 'center',
      color: '#154198',
      fontWeight: 'bold',
    },
    isi: {
      fontSize: 35,
      marginBottom: 10,
      textAlign: 'justify',
      color: '#9c47a1',
      fontWeight: 'bold',
      top: -500,
      left: 130,
    },
    isi2: {
      fontSize: 30,
      marginBottom: 10,
      textAlign: 'justify',
      color: '#9c47a1',
      fontWeight: 'bold',
      top: -300,
      left: 150
    },
    isi3: {
      fontSize: 40,
      marginBottom: 10,
      textAlign: 'justify',
      color: 'red',
      fontWeight: 'bold',
      top: -240,
      left: -70
    },
    button: {
      borderRadius: 10,
      backgroundColor: '#BDB2FF',
      top: -130,
    },
    buttonText: {
      fontSize: 15,
      marginBottom: 10,
      textAlign: 'justify',
      color: '#154198',
      fontWeight: 'bold',
    },
  });

  export default MateriPembagian;