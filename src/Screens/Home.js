import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  Modal,
} from "react-native";
import SearchBar from "../Components/SearchBar";
import Footer from "../Components/Footer";
import { useNavigation } from "@react-navigation/native";

const Data = [
  { title: "First list of a bunch", key: 1 },
  { title: "Second list of a bunch", key: 2 },
  { title: "Third list of a bunch", key: 3 },
  { title: "Fourth list of a bunch", key: 4 },
  { title: "Fifth list of a bunch", key: 5 },
  { title: "Sixth list of a bunch", key: 6 },
  { title: "Seventh list of a bunch", key: 7 },
  { title: "Eighth list of a bunch", key: 8 },
  { title: "Nineth list of a bunch", key: 9 },
];

const Home = () => {
  const [title, setTitle] = useState("");
  const [detils, setDetails] = useState("");
  const [bringModal, setBringModal] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={{ height: "100%", width: "100%", backgroundColor: "black" }}>
      <View style={{ alignItems: "center" }}>
        <SearchBar />
        <View
          style={{
            flexDirection: "row",
            width: "90%",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 8,
          }}
        >
          <TouchableOpacity style={styles.bigBox}>
            <Image
              source={require("../../assets/Icons/Date.png")}
              style={{
                marginLeft: 10,
                marginBottom: 5,
                width: 35,
                height: 35,
              }}
            />

            <Text
              style={{
                color: "#9A9A9A",
                fontSize: 18,
                fontWeight: "bold",
                marginLeft: 10,
              }}
            >
              Today
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bigBox}>
            <Image
              source={require("../../assets/Icons/Calendar.png")}
              style={{
                marginLeft: 10,
                marginBottom: 5,
                width: 35,
                height: 35,
              }}
            />
            <Text
              style={{
                color: "#9A9A9A",
                fontSize: 18,
                fontWeight: "bold",
                marginLeft: 10,
              }}
            >
              Scheduled
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "90%",
            justifyContent: "space-between",
            padding: 8,
            paddingBottom: 10,
          }}
        >
          <TouchableOpacity
            style={styles.bigBox}
            onPress={() => {
              navigation.navigate("DetailScreen", Data, title);
            }}
          >
            <Image
              source={require("../../assets/Icons/Inbox.png")}
              style={{
                marginLeft: 10,
                marginBottom: 5,
                width: 35,
                height: 35,
              }}
            />
            <Text
              style={{
                color: "#9A9A9A",
                fontSize: 18,
                fontWeight: "bold",
                marginLeft: 10,
              }}
            >
              All
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bigBox}>
            <Image
              source={require("../../assets/Icons/Flagged.png")}
              style={{
                marginLeft: 10,
                marginBottom: 5,
                width: 35,
                height: 35,
              }}
            />
            <Text
              style={{
                color: "#9A9A9A",
                fontSize: 18,
                fontWeight: "bold",
                marginLeft: 10,
              }}
            >
              Flagged
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={Data}
        scrollEnabled={true}
        extraData={Data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <TouchableOpacity
                style={{
                  width: "90%",
                  height: 65,
                  paddingHorizontal: 10,
                  padding: 10,
                  borderWidth: 1,
                  borderColor: "#362D2D",
                  borderRadius: 10,
                  marginTop: 10,
                  justifyContent: "center",
                }}
                onPress={() => {
                  navigation.navigate("DetailScreen", item);
                }}
              >
                <Text style={{ color: "rgba(255,255,255,0.9)" }}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />

      <Footer />
      {/* <Modal visible={bringModal}>
        <View>
          <Text>Hello</Text>
        </View>
      </Modal> */}
    </View>
  );
};

const styles = StyleSheet.create({
  bigBox: {
    height: 85,
    width: "48%",
    minWidth: 160,
    backgroundColor: "rgba(196, 196, 196, 0.15)",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "transparent",
    justifyContent: "center",
  },
});

export default Home;
