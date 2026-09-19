import { Link, Stack } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Editor() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Editor" }} />
      <Text style={styles.title}>Sticker editor</Text>
      <Text style={styles.description}>
        Choose an image from the home screen to start creating a sticker.
      </Text>
      <Link href="/" asChild>
        <Button title="Choose an image" />
      </Link>
    </View>
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
  title: {
    fontSize: 28,
    fontWeight: "700",
  },
  description: {
    color: "#667085",
    fontSize: 16,
    textAlign: "center",
  },
});