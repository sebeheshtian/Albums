import React from 'react';
import { View, Text, Image, Linking, ActivityIndicator } from 'react-native';

import Card from './Card';
import CardItem from './CardItem';
import Button from './Button';
const TAMAS = "0935321654497";

onAlbumClicked = (albumURL) => {
  // console.log('pressed');
  Linking.openURL(albumURL)
  // Linking.openURL(`tel:${TAMAS}`)
}

const AlbumDetail = (props) => {
  const { thimbnailContainerStyle, headerContainerStyle } = styles;

  return (
    <Card>
      <CardItem>
        <View style={thimbnailContainerStyle}>
          <Image
            source={{ uri: props.album.thumbnail_image }}
            style={{ width: 50, height: 50, borderRadius: 5 }}
            />
        </View>

        <View style={headerContainerStyle}>
          <Text style={{ fontSize: 18 }}>{props.album.title}</Text>
          <Text>{props.album.artist}</Text>
        </View>
      </CardItem>

      <CardItem>
        <Image
          source={{ uri: props.album.image }}
          style={{ height: 300, width: null, flex: 1 }}
          />
      </CardItem>

      <CardItem>
        <Button clicked={onAlbumClicked.bind(this, props.album.url)}>
          Buy
        </Button>
      </CardItem>
    </Card>
  );
}

const styles = {
  headerContainerStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    margin: 2,
  },
  thimbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
}

export default AlbumDetail;
