import { Stack, useRouter } from "expo-router";
import { StyleSheet } from "react-native";
import { Surface, Text } from "react-native-paper";

import Button from "@/components/Button";
import { useAppTheme } from "@/theme";

export default function Editor() {
  const theme = useAppTheme();
  const router = useRouter();

  return (
    <Surface
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Stack.Screen options={{ title: "Editor" }} />
      <Text
        variant="headlineMedium"
        style={{ color: theme.colors.primary }}
      >
        Sticker editor
      </Text>
      <Text
        variant="bodyLarge"
        style={[styles.description, { color: theme.colors.onSurfaceVariant }]}
      >
        Choose an image from the home screen to start creating a sticker.
      </Text>
      <Button
        label="Choose an image"
        icon="image"
        onPress={() => router.push("/")}
      />
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    padding: 24,
  },
  description: {
    textAlign: "center",
  },
});
