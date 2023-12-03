// CityDetails.js
import React from 'react';
import { View, Text } from 'react-native';

const CityDetails = ({ route }) => {
  const jsonString = route.params.city;
  const city = JSON.parse(jsonString);

  // Access properties of the parsed city object
  const { countryName, currencyName } = city;
  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
       
      </Text>
      {/* Add more details about the city as needed */}
    </View>
  );
};

export default CityDetails;
