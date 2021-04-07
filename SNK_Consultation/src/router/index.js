import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DetailDoctor, Home} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailDoctor"
        component={DetailDoctor}
        options={{headerShown: true, title: 'Detail Dokter'}}
      />
    </Stack.Navigator>
  );
};

export default Router;
