import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import CenterMessage from '../components/CenterMessage';
import { colors } from '../theme';

export default class Countries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: '',
      currency: '',
    };
  }

  static navigationOptions = {
    title: 'Countries',
    headerTitleStyle: {
      color: 'white',
      fontSize: 20,
      fontWeight: '400',
    },
  };

  // Use navigation.setOptions to set the headerRight button
  componentDidMount() {
    this.props.navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => this.handleAddCountry()}>
          <View style={styles.addButtonContainer}>
            <Text style={styles.addButton}>+</Text>
          </View>
        </TouchableOpacity>
      ),
    });
  }

  handleAddCountry = () => {
    const { country, currency } = this.state;
    // Add your logic to handle adding a country

    // For example, navigate to the "Cities" tab with the added country
    this.props.navigation.navigate('Cities', {
      addCity: this.props.route.params.addCity,
      country: { name: country, currency },
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Country Name"
          onChangeText={(country) => this.setState({ country })}
        />
        <TextInput
          style={styles.input}
          placeholder="Currency Name"
          onChangeText={(currency) => this.setState({ currency })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  addButtonContainer: {
    marginRight: 10,
    padding: 10,
  },
  addButton: {
    fontSize: 24,
    color: 'white',
  },
});
