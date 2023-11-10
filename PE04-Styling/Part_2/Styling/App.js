import React, { Component } from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';
import { Image, StyleSheet, View, Text, Platform, TouchableHighlight} from 'react-native';

const data = [
  {
    image: require('./assets/user.png'),
    name: 'Ajay Naik',
    occupation: 'React Native Developer',
    description: 'Ajay Naik is a really great Javascript developer. He loves using JS to build React Native applications for iOS and Android',
    showThumbnail: true,
  },{
    image: require('./assets/user.png'),
    name: 'Ajay Naik',
    occupation: 'React Native Developer',
    description: 'Ajay Naik is a really great Javascript developer. He loves using JS to build React Native applications for iOS and Android',
    showThumbnail: true,
  },{
    image: require('./assets/user.png'),
    name: 'Ajay Naik',
    occupation: 'React Native Developer',
    description: 'Ajay Naik is a really great Javascript developer. He loves using JS to build React Native applications for iOS and Android',
    showThumbnail: true,
  },{
    image: require('./assets/user.png'),
    name: 'Ajay Naik',
    occupation: 'React Native Developer',
    description: 'Ajay Naik is a really great Javascript developer. He loves using JS to build React Native applications for iOS and Android',
    showThumbnail: true,
  },{
    image: require('./assets/user.png'),
    name: 'Ajay Naik',
    occupation: 'React Native Developer',
    description: 'Ajay Naik is a really great Javascript developer. He loves using JS to build React Native applications for iOS and Android',
    showThumbnail: true,
  },{
    image: require('./assets/user.png'),
    name: 'Ajay Naik',
    occupation: 'React Native Developer',
    description: 'Ajay Naik is a really great Javascript developer. He loves using JS to build React Native applications for iOS and Android',
    showThumbnail: true,
  },
];

const ProfileCard = (props) => {
  
  const { image, name, occupation, description, onPress, showThumbnail } = props;
  
  let containerStyles = [styles.cardContainer];

  if (showThumbnail) {
    containerStyles.push(styles.cardThumbnail);
  }

  return (
    <TouchableHighlight onPress={onPress}>
      
      <View style={[containerStyles, props.style]}>
       
        <View style={styles.cardImageContainer}>
          <Image style={styles.cardImage} source={image} />
        </View>
        
        <View>
          <Text style={styles.cardName}>{name}</Text>
        </View>
        
        <View style={styles.cardOccupationContainer}>
          <Text style={styles.cardOccupation}>{occupation}</Text>
        </View>
        
        <View>
          <Text style={styles.cardDescription}>{description}</Text>
        </View>
      
      </View>
    
    </TouchableHighlight>
  );
};

ProfileCard.propTypes = {
  image: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  showThumbnail: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: data,
    };
  }

  handleProfileCardPress = (index) => {
    const showThumbnail = !this.state.data[index].showThumbnail;
    this.setState({
      data: update(this.state.data, {
        [index]: { showThumbnail: { $set: showThumbnail } },
      }),
    });
  };

  render() {
    const list = this.state.data.map(function (item, index) {
        const { image, name, occupation, description, showThumbnail } = item;
        return (
            <ProfileCard
            key={'card-' + index}
            image={image}
            name={name}
            occupation={occupation}
            description={description}
            onPress={this.handleProfileCardPress.bind(this, index)}
            showThumbnail={showThumbnail}
            />
        );
    }, this);

    return (
        <View style={styles.container}>
            {list}
        </View>
    );
  }
}

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    maxHeight: '100%',
    flexWrap: 'wrap',
    alignContent: 'space-around',
    justifyContent: 'center',
  },
  cardContainer: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
    backgroundColor: profileCardColor,
    width: 170,
    height: 270,
    padding: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          height: 10,
        },
        shadowOpacity: 1,
      },
      android: {
        elevation: 15,
      },
    }),
  },
  cardImageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 60,
    height: 60,
    borderRadius: 60,
    marginTop: 15,
    paddingTop: 7.5,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          height: 5,
        },
        shadowOpacity: 1,
      },
      android: {
        borderWidth: 3,
        borderColor: 'black',
        elevation: 7.5,
      },
    }),
  },
  cardImage: {
    width: 40,
    height: 40,
  },
  cardName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 10,
    marginTop: 15,
    textShadowColor: 'black',
    textShadowOffset: {
      height: 2,
      width: 2,
    },
    textShadowRadius: 3,
  },
  cardOccupationContainer: {
    borderColor: 'black',
    borderBottomWidth: 3,
  },
  cardOccupation: {
    fontWeight: 'bold',
    fontSize: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  cardDescription: {
    fontStyle: 'italic',
    marginTop: 10,
    fontSize: 10,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,
  },
  cardThumbnail: {
    transform: [{ scale: 0.5 }],
  },
});