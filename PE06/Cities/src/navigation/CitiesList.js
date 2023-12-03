// CitiesList.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const citiesData = [
  { id: 1, name: 'Mumbai' },
  { id: 2, name: 'Nagpur' },
  { id: 3, name: 'Amravati' },
  // Add more cities as needed
];

const CitiesList = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('CityDetails', { city: item })}
    >
      <View style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={citiesData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default CitiesList;
