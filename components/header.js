import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My todos</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    height: 80,
    marginTop: 50,
    paddingTop: 50,
    backgroundColor: "coral",
    width: 400,
  },
  title: {
    textAlign: "center",
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    paddingTop: 50,
  },
});
