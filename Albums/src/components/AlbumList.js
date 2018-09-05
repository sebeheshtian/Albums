import React from 'react';
import { View, Text } from 'react-native';

import Card from './Card';

renderAlbum = (album) => {
  return (
    <Card key={album.url}>
      <Text>
        {album.title}
      </Text>
    </Card>
  );
}

const AlbumList = (props) => {
  return (
    <View>
      {props.data.map(album => renderAlbum(album))}
    </View>
  );
}

export default AlbumList;
