import { Stack, useRouter } from "expo-router";
import { StyleSheet } from "react-native";
import { Surface, Text } from "react-native-paper";

import Button from "@/components/Button";
import { useAppTheme } from "@/theme";

export default function Gallery() {
  const theme = useAppTheme();
  const router = useRouter();

  return (
    <Surface
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Stack.Screen options={{ title: "Gallery" }} />
      <Text
        variant="headlineMedium"
        style={{ color: theme.colors.primary }}
      >
        Your gallery
      </Text>
      <Text
        variant="bodyLarge"
        style={[styles.description, { color: theme.colors.onSurfaceVariant }]}
      >
        Your saved stickers will appear here.
      </Text>
      <Button
        label="Back to home"
        variant="text"
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
