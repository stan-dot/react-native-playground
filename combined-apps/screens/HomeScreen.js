import domtoimage from 'dom-to-image';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { captureRef } from 'react-native-view-shot';
import Button from '../stickerComponents/Button';
import CircleButton from '../stickerComponents/CircleButton';
import EmojiList from '../stickerComponents/EmojiList';
import EmojiPicker from '../stickerComponents/EmojiPicker';
import EmojiSticker from '../stickerComponents/EmojiSticker';
import IconButton from '../stickerComponents/IconButton';
import ImageViewer from '../stickerComponents/ImageViewer';

const PlaceholderImage = require("../assets/images/background-image.png");

export function HomeScreen() {

  const [selectedImage, setSelectedImage] = useState(null);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pickedEmoji, setPickedEmoji] = useState(null);
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const imageRef = useRef();


  if (status === null) {
    requestPermission();
  }

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
      alert("you did not select any image");
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onSaveImageSync = async () => {
    if (Platform.OS !== 'web') {
      try {
        const localUri = await captureRef(imageRef, {
          height: 440,
          quality: 1
        });
        await MediaLibrary.saveToLibraryAsync(localUri);
        if (localUri) {
          alert("saved!");
        }
      } catch (e) {
        console.log(e);
      }
    }
    else {
      domtoimage.toJpeg(imageRef.current, {
        quality: 0.95,
        width: 320,
        height: 440
      }).then(dataUrl => {
        let link = document.createElement('a');
        link.download = 'sticker-smash.jpg';
        link.href = dataUrl;
        link.click();
      }).catch(e => {
        console.log(e);
      });
    }
  };

  return <GestureHandlerRootView style={styles.container}>
    {/* <View style={styles.imageContainer}> */}
    <View className="background-red-800">
      {/* <Image source={PlaceholderImage} style={styles.image} /> */}
      <View ref={imageRef} collapsable={false}>
        <ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={selectedImage} />
        {/* {pickedEmoji !== null ? <EmojiSticker imageSize={40} stickerSource={pickedEmoji} /> : null} */}
      </View>
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
          {/* <Button label='Choose a photo' theme={'primary'} onPress={pickImageAsync} /> */}
          <Button label='Choose a photo' onPress={pickImageAsync} />
          <Button label='Use this photo' onPress={() => setShowAppOptions(true)} />
        </View>
      )}
    <View className="w-40 h-40 bg-cyan-300">
      <Text className="text-red-700">
        hello!
      </Text>
    </View>
    <StatusBar style="light" />
    <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
      {/**here list of emoji components */}

      <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
    </EmojiPicker>
  </GestureHandlerRootView>;
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