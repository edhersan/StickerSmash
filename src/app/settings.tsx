import { useState } from "react";
import { Stack, useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import { Surface, Switch, Text } from "react-native-paper";

import Button from "@/components/Button";
import { useAppTheme } from "@/theme";

export default function Settings() {
  const theme = useAppTheme();
  const router = useRouter();
  const [saveEditedImages, setSaveEditedImages] = useState(true);

  return (
    <Surface
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Stack.Screen options={{ title: "Settings" }} />
      <Text
        variant="headlineMedium"
        style={{ color: theme.colors.primary }}
      >
        Settings
      </Text>
      <View style={styles.row}>
        <Text variant="bodyLarge" style={{ color: theme.colors.onSurface }}>
          Save edited images
        </Text>
        <Switch value={saveEditedImages} onValueChange={setSaveEditedImages} />
      </View>
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
    gap: 24,
    padding: 24,
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    gap: 16,
  },
});
