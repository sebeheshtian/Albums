import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
  const { headerContainerStyle, textStyle } = styles;

  return (
    <View style={headerContainerStyle}>
      <Text style={textStyle}>{props.title}</Text>
    </View>
  );
}

const styles = {
  headerContainerStyle: {
    backgroundColor: '#dadada',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    padding: 12,
    elevation: 4,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  }
}

export default Header;
