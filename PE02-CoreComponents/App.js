import React from 'react';
import { View, Text, ScrollView, Image, TextInput, StyleSheet } from 'react-native';

const CoreComponents = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Image source={require('./assets/icon.png')} style={styles.icon} />
      </View>
      <Text>Which Course you like?</Text>
      <TextInput style={styles.input} placeholder="Enter your favorite course" />
      

      <Text style={styles.heading}>Core Requirements (24 credits):</Text>
      <Text>CS 504 Software Engineering</Text>
      <Text>CS 506 Programming for Computing</Text>
      <Text>CS 519 Cloud Computing Overview</Text>
      <Text>CS 533 Computer Architecture</Text>
      <Text>CS 547 Secure Systems and Programs</Text>
      <Text>CS 622 Dsicrete Math and Algorithms for Computing</Text>
      <Text>DS 510 Artifical Intelligence for Data Science</Text>
      <Text>DS 620 MAchine Learning</Text>

      <Text style={styles.heading}>Depth of Study (6 Credits)</Text>
      <Text>CS 628 Full Stack Development - Mobile App</Text>
      <Text>CS 624 Full Stack Development - Dev App</Text>

      <Text style={styles.heading}>Capstone Course:</Text>
      <Text>1. Capstone Course</Text>

      <Text style={styles.link}>CityU's Catalog: https://cityu.smartcatalogiq.com/2022-2023/ay-2022-2023-catalog/</Text>

      

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  icon: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'black',  // Font color
    backgroundColor: 'yellow',  // Background color
    padding: 5,  // Add padding for better appearance
    textAlign: 'center', // Center text
  },
  link: {
    fontSize: 14,
    color: 'blue',
    textDecorationLine: 'underline',
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    margin: 10,
  },
});


export default CoreComponents;
