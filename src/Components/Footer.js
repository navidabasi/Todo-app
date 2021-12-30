import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { BlurView } from "expo-blur";
import { useNavigation } from "@react-navigation/native";

export default function Footer() {
  const navigation = useNavigation();
  return (
    <BlurView
      style={{
        width: "100%",
        height: 60,
        position: "absolute",
        bottom: 0,
        justifyContent: "center",
        zIndex: 1000,
      }}
      tint="dark"
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 20,
        }}
      >
        <TouchableOpacity onPress={() => {}}>
          <Text style={{ color: "#1e90ff", fontSize: 15, fontWeight: "bold" }}>
            Create a new Categoury
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("DetailScreen");
          }}
        >
          <Text style={{ color: "#1e90ff", fontSize: 15, fontWeight: "bold" }}>
            Add Reminder
          </Text>
        </TouchableOpacity>
      </View>
    </BlurView>
  );
}
