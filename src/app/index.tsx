import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Alert, Image, StyleSheet, View } from "react-native";
import { Surface, Text } from "react-native-paper";

import Button from "@/components/Button";
import { useAppTheme } from "@/theme";

const placeholderImage = require("../../assets/images/icon.png");

export default function Index() {
  const theme = useAppTheme();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const pickImageAsync = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      Alert.alert("Sin imagen", "No seleccionaste ninguna imagen.");
    }
  };

  return (
    <Surface
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Text
        variant="headlineMedium"
        style={{ color: theme.colors.primary }}
      >
        StickerSmash
      </Text>

      <Surface
        elevation={2}
        style={[
          styles.imageContainer,
          { backgroundColor: theme.colors.surfaceVariant },
        ]}
      >
        <Image
          source={selectedImage ? { uri: selectedImage } : placeholderImage}
          style={styles.image}
        />
      </Surface>

      <View style={styles.footer}>
        <Button label="Choose a photo" icon="image" onPress={pickImageAsync} />
        <Button
          label="Use this photo"
          icon="check"
          variant="secondary"
          disabled={!selectedImage}
          onPress={() =>
            Alert.alert(
              "Próximo paso",
              "Elegir stickers y editar la foto llega en la siguiente lección."
            )
          }
        />
      </View>
    </Surface>
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
  imageContainer: {
    borderRadius: 24,
    overflow: "hidden",
  },
  image: {
    width: 300,
    height: 300,
  },
  footer: {
    width: "100%",
    maxWidth: 320,
    gap: 12,
  },
});
