// CountryDetails.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CountryDetails = ({ route }) => {
  const { country } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.countryName}>{country.name}</Text>
      <Text style={styles.currency}>{country.currency}</Text>
      {/* Add more details as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  countryName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  currency: {
    fontSize: 20,
  },
});

export default CountryDetails;
