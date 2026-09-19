import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Button, Image, StyleSheet, Text, View } from "react-native";

const placeholderImage = require("../../assets/images/icon.png");

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const pickImageAsync = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>StickerSmash</Text>
      <Image
        source={selectedImage ? { uri: selectedImage } : placeholderImage}
        style={styles.image}
      />
      <Button title="Choose an image" onPress={pickImageAsync} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 24,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 16,
  },
});
