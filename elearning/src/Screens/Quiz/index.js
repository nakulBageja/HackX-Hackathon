/**
 * This screen contains quiz for the tutorial completed by the user
 */

import React, {useState} from 'react';
import {View, Text, ToastAndroid, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Avatar} from 'react-native-elements';
import {Questions} from '../../../constants/dummyData';
import styles from './styles';
// Reusable component for Answers
const AnswersComponent = ({answer, bgr, findAns}) => (
  <TouchableOpacity
    style={{...styles.answerContainer, backgroundColor: bgr}}
    activeOpacity={0.6}
    onPress={() => findAns(answer)}>
    <Text style={styles.answerText}>{answer}</Text>
  </TouchableOpacity>
);

const Quiz = () => {
  const navigation = useNavigation();

  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(Questions[index].question);
  const [answer1, setAnswer1] = useState(Questions[index].options[0]);
  const [answer2, setAnswer2] = useState(Questions[index].options[1]);
  const [answer3, setAnswer3] = useState(Questions[index].options[2]);
  const [answer4, setAnswer4] = useState(Questions[index].options[3]);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  // Handler to calculate the score and check answers
  const scoreHandler = input => {
    if (input == Questions[index].answer) {
      ToastAndroid.show('Yay! Your answer is correct!', ToastAndroid.SHORT);
      setScore(score + 25);
    } else {
      ToastAndroid.show(
        `Uh Oh! The correct answer was ${Questions[index].answer}`,
        ToastAndroid.SHORT,
      );
    }
    if (index == 3) {
      setShowScore(true);
    } else {
      let newIndex = index + 1;
      setIndex(newIndex);
      setQuestion(Questions[newIndex].question);
      setAnswer1(Questions[newIndex].options[0]);
      setAnswer2(Questions[newIndex].options[1]);
      setAnswer3(Questions[newIndex].options[2]);
      setAnswer4(Questions[newIndex].options[3]);
    }
  };

  //   Handler to retry quiz
  const retryHandler = () => {
    setScore(0);
    setShowScore(false);
    let newIndex = 0;
    setIndex(newIndex);
    setQuestion(Questions[newIndex].question);
    setAnswer1(Questions[newIndex].options[0]);
    setAnswer2(Questions[newIndex].options[1]);
    setAnswer3(Questions[newIndex].options[2]);
    setAnswer4(Questions[newIndex].options[3]);
  };

  return (
    <View style={styles.mainContainer}>
      {showScore ? (
        <>
          <View style={styles.scoresContainer}>
            <Avatar
              source={{
                uri: 'https://www.pngkey.com/png/full/804-8049827_input-black-male-avatar.png',
              }}
              size={120}
              rounded
              activeOpacity={0.4}
              onPress={() => console.warn('Open Profile')}
            />
            <Text style={styles.scoreText}>Your Score is {score}</Text>
          </View>

          <View style={styles.buttonMainContainer}>
            <TouchableOpacity
              style={{
                ...styles.buttonContainer,
                backgroundColor: '#7c83ff',
              }}
              activeOpacity={0.6}
              onPress={() => retryHandler()}>
              <Text style={styles.buttonText}>Re-Try Quiz</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.buttonContainer,
                marginTop: 12,
                backgroundColor: '#ffaa5b',
              }}
              activeOpacity={0.6}
              onPress={() =>
                navigation.reset({index: 0, routes: [{name: 'Home'}]})
              }>
              <Text style={styles.buttonText}> Study Other Topic</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          {/* Question */}
          <View
            style={{padding: 32, backgroundColor: '#7c83ff', borderRadius: 20}}>
            <Text style={{fontSize: 32, fontWeight: 'bold', color: '#fff'}}>
              {question}
            </Text>
          </View>
          {/* 4 Answers */}
          <View style={{width: '100%'}}>
            <View style={styles.answersMainContainer}>
              <AnswersComponent
                bgr="#ffaa5b"
                answer={answer1}
                findAns={scoreHandler}
              />
              <AnswersComponent
                bgr="#72bff8"
                answer={answer2}
                findAns={scoreHandler}
              />
            </View>
            <View
              style={{
                ...styles.answersMainContainer,
                marginTop: 20,
              }}>
              <AnswersComponent
                bgr="#fd6e75"
                answer={answer3}
                findAns={scoreHandler}
              />
              <AnswersComponent
                bgr="#8f896f"
                answer={answer4}
                findAns={scoreHandler}
              />
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default Quiz;
