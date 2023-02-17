import * as ImagePicker from 'expo-image-picker';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Button from './components/Button';
import CircleButton from './components/CircleButton';
import EmojiList from './components/EmojiList';
import EmojiPicker from './components/EmojiPicker';
import EmojiSticker from './components/EmojiSticker';
import IconButton from './components/IconButton';
import ImageViewer from './components/ImageViewer';

const PlaceholderImage = require("./assets/images/background-image.png");


export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pickedEmoji, setPickedEmoji] = useState(null);
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1
    });
    if (!result.canceled) {
      console.log(result);
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert("you did not select any image")
    }
  }

  const onReset = () => {
    setShowAppOptions(false);
  }

  const onAddSticker = () => {
    setIsModalVisible(true);
  }

  const onModalClose = () => {
    setIsModalVisible(false);
  }

  const onSaveImageSync = async () => {
    // later
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {/* <Image source={PlaceholderImage} style={styles.image} /> */}
        <ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={selectedImage} />
        {pickedEmoji !== null ? <EmojiSticker imageSize={40} stickerSource={pickedEmoji} /> : null}
      </View>
      {showAppOptions ?
        (<View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon='refresh' label={'Reset'} onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageSync} />
          </View>
        </View>) : (
          <View style={styles.footerContainer}>
            <Button label='Choose a photo' theme={'primary'} onPress={pickImageAsync} />
            <Button label='Use this photo' onPress={() => setShowAppOptions(true)} />
          </View>
        )}
      <StatusBar style="auto" />
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose} >
        {/**here list of emoji components */}

        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,

  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center'
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },

});
