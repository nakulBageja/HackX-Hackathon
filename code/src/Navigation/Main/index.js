/**
 * Main Navigation container, the app routes mainly from here
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TutorialNavigaton from '../TutorialStack';
import WelcomeStack from '../WelcomeStack';
const Stack = createStackNavigator();
const MainNavigaton = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TutorialStack"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="WelcomeStack" component={WelcomeStack} />
        <Stack.Screen name="TutorialStack" component={TutorialNavigaton} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigaton;
