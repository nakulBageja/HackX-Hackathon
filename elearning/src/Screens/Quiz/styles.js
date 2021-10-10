import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  answerContainer: {
    padding: 32,
    borderRadius: 20,
    width: '45%',
  },
  answerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'center',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 32,
  },
  scoresContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '20%',
  },
  scoreText: {marginTop: 20, fontSize: 32, fontWeight: 'bold'},
  buttonMainContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  buttonContainer: {padding: 24, borderRadius: 20, width: '100%'},
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'center',
  },
  answersMainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
