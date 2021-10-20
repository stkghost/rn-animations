import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de projetos</Text>

      <Button
        title="Página teste"
        onPress={() => navigation.navigate("Details")}
      />
      <Button
        title="Carousel 1"
        onPress={() => navigation.navigate("GalleryView")}
      />
      <Button
        title="Carousel 2"
        onPress={() => navigation.navigate("Carousel2")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingVertical: 100,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
  },
});
