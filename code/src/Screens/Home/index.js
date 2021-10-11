/**
 * This screen contains grid of various subjects avaiable for user
 * This screen is the first screen shown to the user after splash screen and about us
 */

import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {Avatar} from 'react-native-elements';
import Cards from '../../Components/Cards';
import DATA from '../../../constants/dummyData';
import styles from './styles';
// Header
const Header = () => (
  <View style={styles.headerMainContainer}>
    {/* Heading */}
    {/* Subheading */}
    {/* Image */}
    <View>
      <Text style={styles.headerHeading}>Hi, Nakul 👋</Text>
      <Text style={styles.subheading}>Today is a good day </Text>
      <Text style={styles.subheading}>to learn something new!</Text>
    </View>
    <View>
      <Avatar
        source={{
          uri: 'https://www.pngkey.com/png/full/804-8049827_input-black-male-avatar.png',
        }}
        size={60}
        rounded
        activeOpacity={0.4}
        onPress={() => console.warn('Open Profile')}
      />
    </View>
  </View>
);

const Home = () => {
  // render function for flatlist
  const renderItem = ({item, index}) => (
    <Cards
      title={item.subject}
      img={item.image}
      bgr={item.backgroundColor}
      index={index}
      screenName="Topics"
    />
  );

  return (
    <View style={styles.screenContainer}>
      {/* Flat list of subjects */}
      <FlatList
        ListHeaderComponent={Header}
        ListHeaderComponentStyle={{width: '95%'}}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.flatlistContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Home;
