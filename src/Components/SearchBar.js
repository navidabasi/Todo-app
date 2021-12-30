import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Icon from "@expo/vector-icons/EvilIcons";

export default function SearchBar() {
  return (
    <View style={styles.SearchBar}>
      <View style={{ padding: 5, marginTop: 1 }}>
        <Icon name={"search"} size={30} color="rgba(255, 255, 255, 0.8)" />
      </View>
      <TextInput
        placeholder="Search"
        placeholderTextColor="rgba(255, 255, 255, 0.8)"
        color="white"
        style={{
          maxWidth: "85%",
          width: "85%",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  SearchBar: {
    width: "90%",
    height: 40,
    backgroundColor: "rgba(196, 196, 196, 0.2)",
    borderRadius: 23,
    marginTop: 20,
    borderColor: "transparent",
    flexDirection: "row",
    alignContent: "center",
    marginBottom: 5,
    justifyContent: "center",
  },
});
