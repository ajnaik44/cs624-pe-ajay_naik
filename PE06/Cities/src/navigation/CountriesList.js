// CountriesList.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CountriesList = ({ navigation }) => {
  const countries = [
    { id: 1, name: 'India', currency: 'Rupee' },
    { id: 2, name: 'USA', currency: 'Dollar' },
    // Add more countries as needed
  ];

  return (
    <View style={styles.container}>
      {countries.map((country) => (
        <TouchableOpacity
          key={country.id}
          onPress={() => navigation.navigate('CountryDetails', { country })}
        >
          <View style={styles.countryContainer}>
            <Text style={styles.countryName}>{country.name}</Text>
            <Text style={styles.currency}>{country.currency}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  countryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  countryName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  currency: {
    fontSize: 16,
  },
});

export default CountriesList;
