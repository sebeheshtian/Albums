import React from 'react';
import { View } from 'react-native';

const Ball = () => {
  return (
    <View style={styles.ballStyle} />
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
