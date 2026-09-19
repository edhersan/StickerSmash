import { Link, Stack } from "expo-router";
import { StyleSheet, Switch, Text, View } from "react-native";

export default function Settings() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Settings" }} />
      <Text style={styles.title}>Settings</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Save edited images</Text>
        <Switch value />
      </View>
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
    gap: 24,
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    gap: 16,
  },
  label: {
    fontSize: 16,
  },
  link: {
    color: "#208AEF",
    fontSize: 16,
    fontWeight: "600",
  },
});