// CountriesNav.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CountriesList from './CountriesList';
import CountryDetails from './CountryDetails';

const Stack = createStackNavigator();

const CountriesNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CountriesList" component={CountriesList} />
      <Stack.Screen name="CountryDetails" component={CountryDetails} />
    </Stack.Navigator>
  );
};

export default CountriesNav;
