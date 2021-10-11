/**
 * This screen contains grid of various topics avaiable for that subject selected for user
 */

import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Cards from '../../Components/Cards';
import DATA from '../../../constants/dummyData';
import styles from './styles';

// Header
const Header = () => (
  <View style={styles.headerMainContainer}>
    {/* Heading */}
    <Text style={styles.headerHeading}>Choose a Topic</Text>
  </View>
);
const Topics = ({route}) => {
  // render function for flatlist
  const renderItem = ({item, index}) => (
    <Cards
      title={item.name}
      img={item.image}
      bgr={item.backgroundColor}
      screenName="Tutorials"
      index={index}
    />
  );

  return (
    <View style={styles.screenContainer}>
      {/* Flat list of subjects */}
      <FlatList
        ListHeaderComponent={Header}
        ListHeaderComponentStyle={{width: '95%'}}
        data={DATA[route.params.index].topics}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.flatlistContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Topics;
