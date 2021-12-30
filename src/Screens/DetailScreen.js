import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
} from "react-native";
import { useRoute } from "@react-navigation/core";

export default function DetailScreen() {
  const props = useRoute();
  const Details = props.params;
  console.log(props.params);

  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");

  const inputRef = useRef(null);
  const onFocusHandler = () => {
    inputRef.current.focus();
  };


  props.params == null
    ? setTimeout(() => {
        onFocusHandler();
      }, 200)
    : null;

  return (
    // <ScrollView
    //   contentContainerStyle={{
    //     height: "100%",
    //     width: "100%",
    //     backgroundColor: "black",
    //   }}
    // >
    <View
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "black",
      }}
    >
      {/* {props.params.length === undefined ? (
        <> */}
      <TextInput
        style={{
          marginLeft: 20,
          marginTop: 50,
          fontSize: 20,
          fontWeight: "500",
          maxWidth: "90%",
        }}
        color="white"
        ref={inputRef}
        onChangeText={setNewTitle}
      >
        <Text
          style={{
            color: "white",
          }}
        >
          {props?.params?.title}
        </Text>
      </TextInput>
      <TextInput
        onChangeText={setNewBody}
        disableFullscreenUI
        autoCapitalize={false}
        autoCorrect={false}
        multiline
        style={{
          height: "100%",
          marginLeft: 20,
          marginTop: 30,
          fontSize: 13,
          maxWidth: "90%",
          textAlign: "auto",
          textAlignVertical: "top",
          marginBottom: 20,
        }}
        color="white"
      >
        <Text
          style={{
            color: "white",
          }}
        >
          {props?.params?.key}
        </Text>
      </TextInput>
      {/* </>
      ) : null} */}

      <FlatList
        style={{ marginTop: 40 }}
        data={props.params}
        scrollEnabled={true}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <View style={{ marginTop: 10 }}>
              <Text
                style={{
                  color: "white",
                  marginLeft: 20,
                  maxWidth: "90%",
                  fontSize: 15,
                  fontWeight: "500",
                }}
              >
                {item?.title}
              </Text>

              <Text
                style={{
                  color: "white",
                  marginLeft: 20,
                  maxWidth: "90%",
                  fontSize: 14,
                  fontWeight: "300",
                }}
              >
                {item?.key}
              </Text>
            </View>
          );
        }}
      />
      {/* </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({});
