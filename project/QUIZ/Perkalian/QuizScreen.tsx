import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity,FlatList  } from 'react-native';
import SweetAlert from 'react-native-sweet-alert';
const NumberButton = ({ number, onPress }) => {
  return (
    <TouchableOpacity style={styles.numberButton} onPress={() => onPress(number)}>
      <Text style={styles.numberButtonText}>{number}</Text>
    </TouchableOpacity>
  );
};

const NumberPad = ({ onNumberPress, onDeletePress }) => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'delete']);

  const renderItem = ({ item }) => {
    if (item === 'delete') {
      return (
        <TouchableOpacity style={styles.deleteButton} onPress={onDeletePress}>
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      );
    } else {
      return <NumberButton number={item} onPress={onNumberPress}/>;
    }
  };

  return (
    <FlatList
      data={numbers}
      numColumns={3}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
      style={styles.numberPad}
    />
  );
};

const QuizScreen = ({ navigation, route }) => {
  const { level } = route.params;
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const levels = [
    {
      number: 1,
      questions: [
        { question: '1 x 1', answer: '1' },
        { question: '2 x 2', answer: '4' },
        { question: '2 x 3', answer: '6' },
        { question: '2 x 4', answer: '8' },
        { question: '1 x 4', answer: '4' },
      ],
    },
    {
      number: 2,
      questions: [
        { question: '1 x 1', answer: '1' },
        { question: '2 x 2', answer: '4' },
        { question: '2 x 3', answer: '6' },
        { question: '2 x 4', answer: '8' },
        { question: '1 x 4', answer: '4' },
      ],
    },
    {
      number: 3,
      questions: [
        { question: '1 x 1', answer: '1' },
        { question: '2 x 2', answer: '4' },
        { question: '2 x 3', answer: '6' },
        { question: '2 x 4', answer: '8' },
        { question: '1 x 4', answer: '4' },
      ],
    },
    {
      number: 4,
      questions: [
        { question: '1 x 1', answer: '1' },
        { question: '2 x 2', answer: '4' },
        { question: '2 x 3', answer: '6' },
        { question: '2 x 4', answer: '8' },
        { question: '1 x 4', answer: '4' },
      ],
    },
    {
      number: 5,
      questions: [
        { question: '1 x 1', answer: '1' },
        { question: '2 x 2', answer: '4' },
        { question: '2 x 3', answer: '6' },
        { question: '2 x 4', answer: '8' },
        { question: '1 x 4', answer: '4' },
      ],
    },
    {
      number: 6,
      questions: [
        { question: '1 x 1', answer: '1' },
        { question: '2 x 2', answer: '4' },
        { question: '2 x 3', answer: '6' },
        { question: '2 x 4', answer: '8' },
        { question: '1 x 4', answer: '4' },
      ],
    },
    {
      number: 7,
      questions: [
        { question: '1 x 1', answer: '1' },
        { question: '2 x 2', answer: '4' },
        { question: '2 x 3', answer: '6' },
        { question: '2 x 4', answer: '8' },
        { question: '1 x 4', answer: '4' },
      ],
    },
    {
      number: 8,
      questions: [
        { question: '1 x 1', answer: '1' },
        { question: '2 x 2', answer: '4' },
        { question: '2 x 3', answer: '6' },
        { question: '2 x 4', answer: '8' },
        { question: '1 x 4', answer: '4' },
      ],
    },
    {
      number: 9,
      questions: [
        { question: '1 x 1', answer: '1' },
        { question: '2 x 2', answer: '4' },
        { question: '2 x 3', answer: '6' },
        { question: '2 x 4', answer: '8' },
        { question: '1 x 4', answer: '4' },
      ],
    },
    {
      number: 10,
      questions: [
        { question: '1 x 1', answer: '1' },
        { question: '2 x 2', answer: '4' },
        { question: '2 x 3', answer: '6' },
        { question: '2 x 4', answer: '8' },
        { question: '1 x 4', answer: '4' },
      ],
    },
    {
      number: 11,
      questions: [
        { question: '1 x 1', answer: '1' },
        { question: '2 x 2', answer: '4' },
        { question: '2 x 3', answer: '6' },
        { question: '2 x 4', answer: '8' },
        { question: '1 x 4', answer: '4' },
      ],
    },
    {
      number: 12,
      questions: [
        { question: '1 x 1', answer: '1' },
        { question: '2 x 2', answer: '4' },
        { question: '2 x 3', answer: '6' },
        { question: '2 x 4', answer: '8' },
        { question: '1 x 4', answer: '4' },
      ],
    },
    {
      number: 13,
      questions: [
        { question: '1 x 1', answer: '1' },
        { question: '2 x 2', answer: '4' },
        { question: '2 x 3', answer: '6' },
        { question: '2 x 4', answer: '8' },
        { question: '1 x 4', answer: '4' },
      ],
    },
    {
      number: 14,
      questions: [
        { question: '1 x 1', answer: '1' },
        { question: '2 x 2', answer: '4' },
        { question: '2 x 3', answer: '6' },
        { question: '2 x 4', answer: '8' },
        { question: '1 x 4', answer: '4' },
      ],
    },
    {
      number: 15,
      questions: [
        { question: '1 x 1', answer: '1' },
        { question: '2 x 2', answer: '4' },
        { question: '2 x 3', answer: '6' },
        { question: '2 x 4', answer: '8' },
        { question: '1 x 4', answer: '4' },
      ],
    },
    {
      number: 16,
      questions: [
        { question: '1 x 1', answer: '1' },
        { question: '2 x 2', answer: '4' },
        { question: '2 x 3', answer: '6' },
        { question: '2 x 4', answer: '8' },
        { question: '1 x 4', answer: '4' },
      ],
    },
    {
      number: 17,
      questions: [
        { question: '1 x 1', answer: '1' },
        { question: '2 x 2', answer: '4' },
        { question: '2 x 3', answer: '6' },
        { question: '2 x 4', answer: '8' },
        { question: '1 x 4', answer: '4' },
      ],
    },
    {
      number: 18,
      questions: [
        { question: '1 x 1', answer: '1' },
        { question: '2 x 2', answer: '4' },
        { question: '2 x 3', answer: '6' },
        { question: '2 x 4', answer: '8' },
        { question: '1 x 4', answer: '4' },
      ],
    },
    {
      number: 19,
      questions: [
        { question: '1 x 1', answer: '1' },
        { question: '2 x 2', answer: '4' },
        { question: '2 x 3', answer: '6' },
        { question: '2 x 4', answer: '8' },
        { question: '1 x 4', answer: '4' },
      ],
    },
    {
      number: 20,
      questions: [
        { question: '1 x 1', answer: '1' },
        { question: '2 x 2', answer: '4' },
        { question: '2 x 3', answer: '6' },
        { question: '2 x 4', answer: '8' },
        { question: '1 x 4', answer: '4' },
      ],
    },
    // Data levels selanjutnya
  ];

  const currentLevel = levels.find((l) => l.number === level);
  const questions = currentLevel.questions;

  const handleAnswerChange = (text) => {
    setAnswer(text);
  };

  const handleNumberPress = (number) => {
    setAnswer(answer + number.toString());
  };

  const handleDeletePress = () => {
    setAnswer(answer.slice(0, -1));
  };

  const handleNextQuestionPress = () => {
    const currentQuestion = questions[currentQuestionIndex];
    if (answer === currentQuestion.answer) {
      setScore(prevScore => prevScore + 1);
      console.log('Score:', score + 1);
      if (currentQuestionIndex === questions.length - 1) {
        SweetAlert.showAlertWithOptions({
          title: 'Selamat',
          subTitle: 'Anda Telah Meyelesaikan Quiz',
          confirmButtonTitle: 'Lihat Hasil',
          style: 'success',
          cancellable: false,
          onConfirm: function() {
            console.log("Score: ", score + 1);
            console.log("Total: ", questions.length);
            navigation.navigate('ResultPerkalian', { score: score + 1, total: questions.length });
          }
        });
        navigation.navigate('ResultPerkalian', { score: score + 1, total: questions.length });
      }
      else {
        SweetAlert.showAlertWithOptions({
          title: 'Jawaban Benar!',
          subTitle: 'Pertanyaan selanjutnya',
          confirmButtonTitle: 'Ok',
          style: 'success',
          cancellable: false,
        });
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setAnswer('');
      }
    } else {
      SweetAlert.showAlertWithOptions({
        title: 'Jawaban Salah!',
        subTitle: 'Coba Lihat Lagi Tabelnya',
        confirmButtonTitle: 'Ok',
        style: 'error',
        cancellable: false,
      });
      if (currentQuestionIndex === questions.length - 1) {
        console.log("Score: ", score);
        console.log("Total: ", questions.length);
        navigation.navigate('ResultPerkalian', { score: score, total: questions.length });
      } else {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setAnswer('');
      }
    }
    
  };


  return (
    <View style={styles.container}>
      <View style={styles.questionBox}>
        <Text style={styles.question}>{questions[currentQuestionIndex].question}</Text>
      </View>
      <View style={styles.answerInput}>
        <TextInput
          style={styles.input}
          onChangeText={handleAnswerChange}
          value={answer}
          editable={false}
          placeholder="Jawaban"
          keyboardType="numeric"
        />
      </View>
      <View style={{alignContent:'center', alignItems:'center'}}>
        <NumberPad onNumberPress={handleNumberPress} onDeletePress={handleDeletePress}/>
        <TouchableOpacity style={styles.buttonNext} onPress={handleNextQuestionPress}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent:'center',
    backgroundColor:'#FFC6FF',
  },
  buttonText: {
    fontSize: 24,
    marginBottom: 20,
    color: 'black'
  },
  answerInput: {
    borderWidth: 3,
    borderRadius: 5,
    borderColor: 'gray',
    backgroundColor:'#A0C4FF',
    width: '100%',
    marginBottom: 5,
    color: 'black',
  },
  input: {
    fontSize: 22,
    marginBottom: 20,
    color: 'black',
    textAlign: 'center'
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    color: 'black'
  },
  question: {
    fontSize: 50,
    marginBottom: 10,
    color: 'black',
    textAlign: 'center',
  },
  questionBox: {
    backgroundColor:'#D3F7AD',
    height:'30%',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  buttonNext: {
    backgroundColor: '#BDB2FF',
    padding: 10,
    borderRadius: 5,
    width: '97%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberButton:{
    backgroundColor: '#FFADAD',
    padding: 16,
    borderRadius: 8,
    margin: 8,
    height: 90,
    alignContent: 'center',
    alignItems: 'center',
    width: 120,
  },
  numberButtonText:{
    fontSize: 24,
    color:'#154198',
  },
  deleteButton:{
    backgroundColor: 'red',
    padding: 16,
    borderRadius: 8,
    margin: 8,
    height: 80,
    width: 260,
  },
  deleteButtonText:{
    fontSize: 24,
    color:'#fff',
    textAlign: 'center'
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  scoreText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'black'
  },
});

export default QuizScreen;
