import React from 'react';
import { Text, ScrollView } from 'react-native';

import AlbumDetail from './AlbumDetail';

const AlbumList = (props) => {
  return (
    <ScrollView>
      {props.data.map(album => <AlbumDetail key={album.url} album={album} />)}
    </ScrollView>
  );
}

export default AlbumList;
