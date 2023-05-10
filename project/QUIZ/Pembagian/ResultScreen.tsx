import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';


const ResultScreenPembagian = ({ navigation, route }) => {
  const { score, total } = route.params;
  const percentage = ((score / total) * 100).toFixed(2);

  const handlePlayAgain = () => {
    navigation.navigate('LevelScreenPembagian');
  };

  let message = null;
  if (score === total) {
    message = (
      <View style={styles.messageContainer}>
        <Image source={require('./success.png')} style={styles.imageMessage} />
        <Text style={styles.textMessage}>Selamat, kamu hebat!</Text>
      </View>
    );
  } else {
    message = (
      <View style={styles.messageContainer}>
        <Image source={require('./failed.png')} style={styles.imageMessage} />
        <Text style={styles.textMessage}>Jangan bersedih, ayo buka lagi tabel pembagiannya, kamu pasti bisa!</Text>
      </View>
    );
  }

  return (
    <ImageBackground source={require('./BG.png')} resizeMode="cover" style={styles.image}>
      {message}
      <Text style={styles.title}>
        Kamu dapat menjawab {score} dari {total} soal
      </Text>
      <Text style={styles.title}>Skor Kamu adalah:</Text>
      <Text style={styles.score}>
        ({percentage}%)
      </Text>
      
      <TouchableOpacity style={styles.playAgainButton} onPress={handlePlayAgain}>
        <Text style={styles.playAgainButtonText}>Main Lagi</Text>
      </TouchableOpacity>    
    </ImageBackground>

  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'#8093f1',
    textAlign:'center'
  },
  score: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#154198'
  },
  playAgainButton: {
    backgroundColor: '#FFADAD',
    padding: 10,
    borderRadius: 5,
  },
  playAgainButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  messageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  imageMessage: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  textMessage: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#154198',
  },
});

export default ResultScreenPembagian;
