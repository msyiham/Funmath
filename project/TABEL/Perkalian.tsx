import React from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native';

export default function TabelPerkalian() {
  const numbers = [...Array(10).keys()].map(n => n + 1); // [1, 2, 3, ..., 10]
  const table = numbers.map(i => {
    const column = numbers.map(j => {
      const product = i * j;
      return (
        <View style={[styles.hitungan]}>
          <Text key={j} style={[styles.cell, 
            j === 1 && { color: 'red' },
            j === 2 && { color: 'purple' },
            j === 3 && { color: 'blue' },
            j === 4 && { color: 'green' },
            j === 5 && { color: 'red' },
            j === 6 && { color: 'blue' },
            j === 7 && { color: 'green' },
            j === 8 && { color: 'purple' },
            j === 9 && { color: 'blue' },
            j === 10 && { color: 'red' },
            ]}>
            <Text style={styles.left}>{i}</Text> x{' '}
            <Text style={styles.right}>{j}</Text> ={' '}
            <Text style={styles.result}>{product}</Text>
          </Text>
        </View>
      );
    });
    return (
      <View>
          <Text style={{fontWeight:'bold', color:'purple', fontSize: 25, textAlign:'center'}}>
            <Text >{i}</Text>
          </Text>
          <View style={{ flexDirection: 'column', flexWrap: 'wrap', borderRadius: 10, borderWidth: 2, borderColor:'#5000ca', backgroundColor:'#FFADAD', marginHorizontal:5}}>
            <View style={{ width: '50%', padding: 5 }}>
            {column}
            </View>
          </View>
      </View>
    );
  });

  return (
    <ImageBackground source={require('./BG3.jpg')} resizeMode="cover" style={styles.image}>
      <ScrollView>
        <ScrollView horizontal={true} style={styles.container}>
          <View style={{flexDirection:'row', marginBottom: 50}}>{table}</View>
        </ScrollView>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FFC6FF',
    flexDirection: 'row',
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hitungan: {
    width:170,
    height:60,
    marginHorizontal: 5,
    alignContent:'center',
  },
  cell: {
    marginRight: 5,
    fontSize:24,
    textAlign: 'center',
  },
  left: {
    marginRight: 5,
  },
  right: {
    marginLeft: 5,
  },
  result: {
    fontWeight: 'bold',
  },
});
