import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Button, Text, Image, Dimensions, ScrollView } from 'react-native';

import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';

const GameOverScreen = (props) => {
  const [availableDeviceWidth, setAvailableDeviceWidth] = useState(Dimensions.get('window').width);
  const [availableDeviceHeight, setAvailableDeviceHeight] = useState(
    Dimensions.get('window').height,
  );

  useEffect(() => {
    const updateLayout = () => {
      setAvailableDeviceWidth(Dimensions.get('window').width);
      setAvailableDeviceHeight(Dimensions.get('window').height);
    };
    Dimensions.addEventListener('change', updateLayout);
    return () => {
      Dimensions.removeEventListener('change', updateLayout);
    };
  });

  let ImageContainerStyle = {
    ...styles.imageContainer,
    ...{
      borderRadius: (availableDeviceWidth * 0.7) / 2,
      width: availableDeviceWidth * 0.7,
      height: availableDeviceWidth * 0.7,
      marginVertical: availableDeviceHeight / 30,
    },
  };
  if (availableDeviceHeight < 500) {
    console.log('styles Changed');
    ImageContainerStyle = {
      ...styles.imageContainer,
      ...{
        borderRadius: (availableDeviceHeight * 0.7) / 2,
        width: availableDeviceHeight * 0.7,
        height: availableDeviceHeight * 0.7,
        marginVertical: availableDeviceWidth / 30,
      },
    };
  }

  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>Game is Over!</TitleText>
        <View style={ImageContainerStyle}>
          <Image
            fadeDuration={1000}
            source={require('../assets/success.png')}
            style={styles.image}
            resizeMode="cover"
          />
          {/* <Image
          fadeDuration={1000}
          source={{
            uri: 'https://media.istockphoto.com/photos/teamwork-couple-climbing-helping-hand-picture-id1059713466',
          }}
          style={styles.image}
          resizeMode="cover"
        /> */}
        </View>
        <View style={styles.resultContainer}>
          <BodyText style={styles.resultText}>
            Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
            guess the number
            <Text style={styles.highlight}> {props.userNumber}</Text>
          </BodyText>
        </View>
        <MainButton onPress={props.onRestart}>New Game!</MainButton>
      </View>
    </ScrollView>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  imageContainer: {
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  resultContainer: {
    // width: '80%',
    marginHorizontal: 30,
    marginVertical: Dimensions.get('window').height / 60,
  },
  resultText: {
    textAlign: 'center',
    fontSize: Dimensions.get('window').height < 400 ? 16 : 20,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold',
  },
});
