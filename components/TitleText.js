import React from 'react';
import { StyleSheet, Text } from 'react-native';

const TitleText = (props) => {
  return (
    <Text {...props} style={{ ...styles.titleText, ...props.style }}>
      {props.children}
    </Text>
  );
};

export default TitleText;

const styles = StyleSheet.create({
  titleText: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
  },
});
