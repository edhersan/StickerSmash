import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Favorites() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Favorites" }} />
      <Text style={styles.title}>Favorites</Text>
      <Text style={styles.description}>
        Mark your best stickers as favorites to find them quickly.
      </Text>
      <Link href="/" style={styles.link}>
        Back to home
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