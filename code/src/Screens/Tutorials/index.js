/**
 * This screen contains tutorial video for the topic selected by user
 */

import React, {useEffect, useRef, useState} from 'react';
import {View, Text, Pressable, TouchableOpacity} from 'react-native';
import Video from 'react-native-video';
import sampleVideo from '../../../assets/trigo.mp4';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
const Tutorials = () => {
  const navigation = useNavigation();

  const videoRef = useRef();
  // State to maintain styling of the video when the video is put to full screen
  const [videoHeight, setVideoHeight] = useState('50%');
  const [videoResizeMode, setVideoResizeMode] = useState('contain');

  // Function to handle when toggling of full screen
  const fullScreenHandler = () => {
    if (videoHeight == '50%') {
      setVideoHeight('100%');
      setVideoResizeMode('stretch');
    } else {
      setVideoHeight('50%');
      setVideoResizeMode('contain');
    }
  };

  // when in full screen and back button has been pressed, convert the video and app screen to portrait
  useEffect(
    () =>
      navigation.addListener('beforeRemove', event => {
        if (videoHeight == '50%') return;

        event.preventDefault();
        videoRef.current.dismissFullscreenPlayer();
      }),
    [navigation, videoHeight],
  );

  return (
    <View style={{flex: 1, justifyContent: 'space-between'}}>
      <Video
        source={sampleVideo}
        style={{height: videoHeight}}
        controls={true}
        resizeMode={videoResizeMode}
        ref={videoRef}
        onFullscreenPlayerDidDismiss={fullScreenHandler}
        onFullscreenPlayerDidPresent={fullScreenHandler}
      />
      <Pressable
        style={styles.buttonContainer}
        onPress={() => videoRef.current.presentFullscreenPlayer()}>
        <Text style={styles.buttonText}>Full screen</Text>
      </Pressable>
      <TouchableOpacity
        style={styles.buttonContainer}
        activeOpacity={0.7}
        onPress={() => navigation.navigate('Quiz')}>
        <Text style={styles.buttonText}>Start the Quiz</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Tutorials;
