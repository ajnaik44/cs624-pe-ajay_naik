// CityDetails.js
import React from 'react';
import { View, Text } from 'react-native';

const CityDetails = ({ route }) => {
  const { city } = route.params;

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
        {city.name}, {city.country}
      </Text>
      {/* Add more details about the city as needed */}
    </View>
  );
};

export default CityDetails;
