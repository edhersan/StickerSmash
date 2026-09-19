import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Not found" }} />
      <Text style={styles.title}>Page not found</Text>
      <Text style={styles.description}>
        The page you are looking for does not exist.
      </Text>
      <Link href="/" style={styles.link}>
        Return to home
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
  link: {
    color: "#208AEF",
    fontSize: 16,
    fontWeight: "600",
  },
});