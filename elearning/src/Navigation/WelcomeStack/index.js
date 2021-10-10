/**
 * Welcome Navigation container, this stack routes the welcome splash and about us pages
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../Screens/Home';
import Topics from '../../Screens/Topics';
import Quiz from '../../Screens/Quiz';
import Tutorials from '../../Screens/Tutorials';
const Stack = createStackNavigator();
const WelcomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Topics" component={Topics} />
      <Stack.Screen name="Tutorials" component={Tutorials} />
      <Stack.Screen name="Quiz" component={Quiz} />
    </Stack.Navigator>
  );
};

export default WelcomeStack;
