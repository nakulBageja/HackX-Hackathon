/**
 * Tutorial Navigation container, the app routes tutorials screens
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../Screens/Home';
import Topics from '../../Screens/Topics';
import Quiz from '../../Screens/Quiz';
import Tutorials from '../../Screens/Tutorials';
const Stack = createStackNavigator();
const TutorialNavigaton = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Topics"
        component={Topics}
        options={({route}) => ({title: route.params.name})}
      />
      <Stack.Screen
        name="Tutorials"
        component={Tutorials}
        options={({route}) => ({title: route.params.name})}
      />
      <Stack.Screen
        name="Quiz"
        component={Quiz}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default TutorialNavigaton;
