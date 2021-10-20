import React from "react";
import { Button, StyleSheet, View } from "react-native";

export function Details({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    alignItems: "center",
    padding: 40,

    // justifyContent: "center",
  },
  title: {
    fontSize: 18,
  },
});
