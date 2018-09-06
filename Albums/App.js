import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

import Header from './src/components/Header';
import Ball from './src/components/Ball';
import AlbumList from './src/components/AlbumList';
const URL = "http://23.227.201.71:3100/albums";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: [],
    }
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <Header title="Albums!" />
        <AlbumList data={this.state.albums} />

        {/*<Ball
          ballStyle={{
            backgroundColor: 'black'
          }}
          />*/}
      </View>
    );
  }

  componentDidMount() {
    axios.get(URL)
    .then(res => {
      this.setState({ albums: res.data });
    })
    .catch(error => {
      console.log("error: ", error);
    });
  }
}

const styles = {
  containerStyle: {
    backgroundColor: 'white',
    flex: 1,
  },
}

export default App;
