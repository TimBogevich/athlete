import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function AboutPage() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>About Us</Text>
        <Text style={styles.subtitle}>This is the about page.</Text>
        
        <Link href="/" style={styles.link}>
          Go back to Home
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  link: {
    marginTop: 20,
    fontSize: 24,
    color: "blue",
    textDecorationLine: "underline",
  },
});