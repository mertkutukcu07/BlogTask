import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HomeBlogs = ({ data }) => {
  const navigation = useNavigation();
  const handleBlog = (id) => {
    navigation.navigate("BlogDetail", id);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => handleBlog(data.id)}
        style={styles.touchBlog}
      >
        <Text style={styles.dataTxt}>{data.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeBlogs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  touchBlog: {
    backgroundColor: Colors.Colors.white,
    width: moderateScale(165),
    height: moderateVerticalScale(195),
    margin: moderateScale(10),
    justifyContent: "center",
    alignItems: "center",
  },
  dataTxt: {
    textAlign: "center",
    color: Colors.Colors.black,
    fontSize: moderateScale(20),
    fontWeight: "600",
  },
});
