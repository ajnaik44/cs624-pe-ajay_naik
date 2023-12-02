// AddCity.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const AddCity = ({ navigation }) => {
  const [cityName, setCityName] = useState('');
  const [countryName, setCountryName] = useState('');

  const addCity = () => {
    // Validate input, and you can add more validations as needed
    if (!cityName || !countryName) {
      alert('Please enter both city and country names.');
      return;
    }

    // Pass city and country names to CityDetails screen
    navigation.navigate('CityDetails', {
      city: { name: cityName, country: countryName },
    });
  };

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
        Add City
      </Text>
      <TextInput
        placeholder="Enter City Name"
        value={cityName}
        onChangeText={setCityName}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Enter Country Name"
        value={countryName}
        onChangeText={setCountryName}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
      />
      <Button title="Add City" onPress={addCity} />
    </View>
  );
};

export default AddCity;
