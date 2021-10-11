/**
 * Reusable component for the list of Subjects and Topics
 */

import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-elements';

const Cards = ({title, img, bgr, index, screenName}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        padding: 32,
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 16,
        borderRadius: 20,
        elevation: 2,
        backgroundColor: bgr,
      }}
      activeOpacity={0.7}
      onPress={() => navigation.navigate(screenName, {name: title, index})}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginBottom: 12,
          color: '#fff',
        }}>
        {title}
      </Text>
      <Avatar source={{uri: img}} rounded size={70} />
    </TouchableOpacity>
  );
};

export default Cards;
