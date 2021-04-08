import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DetailDoctor, Home, AddDoctor} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailDoctor"
        component={DetailDoctor}
        options={{headerShown: false, title: 'Detail Dokter'}}
      />
      <Stack.Screen
        name="AddDoctor"
        component={AddDoctor}
        options={{headerShown: false, title: 'Tambah Dokter'}}
      />
    </Stack.Navigator>
  );
};

export default Router;
