import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Spinner from "react-native-loading-spinner-overlay";
import Colors from "../constants/Colors";
const Loading = ({ visible }) => {
  return (
    <View style={styles.container}>
      <Spinner visible={visible} textContent={""} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: "#FFF",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.Colors.black,
  },
});
