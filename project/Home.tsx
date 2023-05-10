import React, { Component } from 'react';
import * as Progress from 'react-native-progress';
import {
    ImageBackground,
    Image,
    StyleSheet,
    Text,
    View,
  } from 'react-native';
import AnimatedTouchableOpacity from './button';
const Home = ({navigation}) => {
  return (
      <ImageBackground source={require('./BG3.jpg')} resizeMode="cover" style={styles.image}>
        <Text style={styles.title}>Selamat Datang di Aplikasi FUNMATH</Text>
        <Logo/>
        <Pencapaian/>
        <Menu navigation={navigation}/>
      </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFC6FF',
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    marginBottom: 10,
    textAlign: 'center',
    color: '#154198',
    fontWeight: 'bold',
  },
  pencapaian: {
    fontSize: 18,
    color: '#154198',
    textAlign: 'center',
    marginBottom: 10
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  progress: {
    marginTop: 10,
    marginBottom: 10,
    width: 200,
  },
});
const Logo = () => {
  // Try removing the `height: '100%'` on the parent View.
  // The parent will not have dimensions, so the children can't expand.
  return (
    <Image source={require('./LOGO.jpg')} style={styles.logo}/>
  );
};
const Pencapaian = () => {
  return(
    <View>
      <Progress.Bar progress={0.1} width={200} height={20}  borderRadius={10} color={'#f25757'} style={styles.progress}/>
      <Text style={styles.pencapaian}>1% Pencapaian</Text>
    </View>
  );
};
const Menu = ({navigation}) => {
  return(
    <View>
      <AnimatedTouchableOpacity title="MATERI" onPress={() => navigation.navigate("Materi")} ></AnimatedTouchableOpacity>
      <AnimatedTouchableOpacity title="TABEL" onPress={() => navigation.navigate("Tabel")} ></AnimatedTouchableOpacity>
      <AnimatedTouchableOpacity title="QUIZ" onPress={() => navigation.navigate("Quiz")} ></AnimatedTouchableOpacity>
      <AnimatedTouchableOpacity title="PENCAPAIAN" onPress={() => navigation.navigate("Pencapaian")} ></AnimatedTouchableOpacity>
    </View>
  );
};
export default Home;