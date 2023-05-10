import React, { Component } from 'react';
import { TouchableOpacity, Text, Animated, StyleSheet } from 'react-native';

interface Props {
  title: string;
  onPress?: () => void;
}

interface State {
  scaleValue: Animated.Value;
}

export default class AnimatedTouchableOpacity extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
          scaleValue: new Animated.Value(1),
        };
      }

  handlePressIn = () => {
    Animated.timing(this.state.scaleValue, {
      toValue: 0,
      duration: 5,
      useNativeDriver: true,
    }).start();
  };

  handlePressOut = () => {
    Animated.timing(this.state.scaleValue, {
      toValue: 1,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  render() {
    const { scaleValue } = this.state;
    const { title, onPress } = this.props;
    return (
      <TouchableOpacity
        onPressIn={this.handlePressIn}
        onPressOut={this.handlePressOut}
        onPress={onPress}
        activeOpacity={0.8}
        style={styles.button}
      >
        <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
          <Text style={styles.buttonText}>{title}</Text>
        </Animated.View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
    button: {
      backgroundColor: '#BDB2FF',
      borderRadius: 30,
      padding: 10,
      width: 200,
      marginBottom: 10,
      marginTop: 5,
      elevation: 5,
      shadowColor: 'black',
      shadowOpacity: 0.2,
      shadowRadius: 5,
      shadowOffset: { width: 0, height: 3 },
      underlayColor: "grey",
    },
    buttonText: {
      fontSize: 18,
      color: '#154198',
      textAlign: 'center',
      fontWeight:'bold'
    },
  });
