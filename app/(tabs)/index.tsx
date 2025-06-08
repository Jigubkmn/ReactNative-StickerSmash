import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";
import { StyleSheet, View } from "react-native";

const PlaceholderImage = require('../../assets/images/background-image.png');

export default function Index() {
  const [selectedImg, setSelectedImg] = useState<string | undefined>(undefined);
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
    } else {
      alert('You did not select any image.');
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImg={selectedImg} />
      </View>
      <View style={styles.footerContainer}>
        {/* ボタンを押すとlaunchImageLibraryAsync関数を実行して画像選択する。 */}
        <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
        <Button label="Use this photo" />
      </View>
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
});
