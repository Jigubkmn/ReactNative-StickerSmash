import Button from "@/components/Button";
import CircleButton from "@/components/CircleButton";
import IconButton from "@/components/IconButton";
import ImageViewer from "@/components/ImageViewer";
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";
import { StyleSheet, View } from "react-native";

const PlaceholderImage = require('../../assets/images/background-image.png');

export default function Index() {
  const [selectedImg, setSelectedImg] = useState<string | undefined>(undefined);
  // モーダルを開くボタンやその他のオプション表示/非表示を設定
  const [showAppOptions, setShowAppOptions] = useState(false);
  const pickImageAsync = async () => {
    // launchImageLibraryAsync：デバイスの画像ライブラリを開くメソッド
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      // 画像選択後、編集可能にする
      allowsEditing: true,
      // 画像品質を最高(1)にする
      quality: 1,
    });
    // 画像を選択できた時
    if (!result.canceled) {
      setSelectedImg(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not select any image.');
    }
  }

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    // we will implement this later
  };

  const onSaveImageAsync = async () => {
    // we will implement this later
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImg={selectedImg} />
      </View>
      {/* 画像を選択したらモーダルを表示させる */}
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
        {/* ボタンを押すとlaunchImageLibraryAsync関数を実行して画像選択する。 */}
        <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
        <Button label="Use this photo" onPress={() => setShowAppOptions(true)}/>
      </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
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
