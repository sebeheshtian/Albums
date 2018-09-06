import React from 'react';
import { View } from 'react-native';

const Ball = (props) => {
  return (
    <View style={[styles.ballStyle, props.ballStyle]} />
  );
}

const styles = {
  ballStyle: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: 'red',
  }
}

export default Ball;
