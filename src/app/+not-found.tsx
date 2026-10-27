import { Stack, useRouter } from "expo-router";
import { StyleSheet } from "react-native";
import { Surface, Text } from "react-native-paper";

import Button from "@/components/Button";
import { useAppTheme } from "@/theme";

export default function NotFoundScreen() {
  const theme = useAppTheme();
  const router = useRouter();

  return (
    <Surface
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Stack.Screen options={{ title: "Not found" }} />
      <Text
        variant="headlineMedium"
        style={{ color: theme.colors.primary }}
      >
        Page not found
      </Text>
      <Text
        variant="bodyLarge"
        style={[styles.description, { color: theme.colors.onSurfaceVariant }]}
      >
        The page you are looking for does not exist.
      </Text>
      <Button
        label="Return to home"
        variant="text"
        onPress={() => router.replace("/")}
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
