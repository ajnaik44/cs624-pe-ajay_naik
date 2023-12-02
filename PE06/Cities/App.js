// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CitiesNav from './src/navigation/CitiesNav';
import CountriesNav from './src/navigation/CountriesNav'; // Add this import
import AddCity from './src/navigation/AddCity';
import AddCountry from './src/navigation/AddCountry';



const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Cities" component={CitiesNav} />
        <Tab.Screen name="AddCity" component={AddCity} />
        <Tab.Screen name="Countries" component={CountriesNav} />
        <Tab.Screen name="AddCountry" component={AddCountry} /> 
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
