import React, { Component } from 'react';
import { Image, Text, StyleSheet, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.cardImageContainer}>
            <Image
              style={styles.cardImage}
              source={require('./assets/icons8-user-50.png')}
            />
          </View>
          <Text style={styles.name}>Alessandro Loi</Text>
            <Text style={styles.jobTitle}>React Native Developer</Text>
            <Text style={styles.description}>
              Alessandro is a really great JavasScript developer. 
              He loves using KS to build React Native applications for iOS and Android.
            </Text>
        </View>
      </View>
    );
  }
}

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
    backgroundColor: profileCardColor,
    width: 300,
    height: 400,
    padding: 20
  },
  cardImageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 120,
    height: 120,
    borderRadius: 60,
    paddingTop: 15,
    marginTop: 30
  },
  cardImage: {
    width: 80,
    height: 80,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'white'
  },
  jobTitle: {
    fontSize: 18,
    fontStyle: 'italic',
    marginTop: 5,
    textDecorationLine: 'underline'
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    paddingHorizontal: 20,
  },
});
