// CitiesNav.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CitiesList from './CitiesList'; // You'll need to create CitiesList component
import CityDetails from './CityDetails'; // You'll need to create CityDetails component

const Stack = createStackNavigator();

const CitiesNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CitiesList" component={CitiesList} />
      <Stack.Screen name="CityDetails" component={CityDetails} />
    </Stack.Navigator>
  );
};

export default CitiesNav;
