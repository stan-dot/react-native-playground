import React from 'react';
import styles from '../assets/styles';

import { Text, View, Image, ImageSourcePropType } from 'react-native';

type MessageProps = {
  image: ImageSourcePropType,
  lastMessage: string,
  name: string

}

const Message = ({ image, lastMessage, name }: MessageProps) => {
  return (
    <View style={styles.containerMessage}>
      <Image source={image} style={styles.avatar} />
      <View style={styles.content}>
        <Text>{name}</Text>
        <Text style={styles.message}>{lastMessage}</Text>
      </View>
    </View>
  );
};

export default Message;
