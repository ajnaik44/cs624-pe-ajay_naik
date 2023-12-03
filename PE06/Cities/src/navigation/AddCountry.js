// AddCountry.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddCountry = ({ navigation }) => {
  const [countryName, setCountryName] = useState('');
  const [currencyName, setCurrencyName] = useState('');

  const handleAddCountry = () => {
    // Perform any necessary logic to add the country
    // You can also navigate to the next screen here if needed
    navigation.navigate('CityDetails', {
      countryName,
      currencyName,
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Country Name"
        value={countryName}
        onChangeText={setCountryName}
      />
      <TextInput
        style={styles.input}
        placeholder="Currency Name"
        value={currencyName}
        onChangeText={setCurrencyName}
      />
      <Button title="Add Country" onPress={handleAddCountry} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
    width: 200,
  },
});

export default AddCountry;
