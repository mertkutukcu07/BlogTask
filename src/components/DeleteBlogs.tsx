import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import Colors from "../constants/Colors";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { deleteBlogs } from "../redux/blogSlice";
import Loading from "../components/Loading";
const DeleteBlogs = ({ data }) => {
  const navigation = useNavigation();
  const blogs = useSelector((state) => state.blogs.data);
  const loading = useSelector((state) => state.blogs.loading);
  const error = useSelector((state) => state.blogs.error);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBlogs(id));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => handleDelete(data.id)}
        style={styles.deleteIconContainer}
      >
        <AntDesign name="delete" size={24} color={"red"} />
      </TouchableOpacity>
      <View style={styles.touchBlog}>
        <Text style={styles.dataTxt}>{data.title}</Text>
      </View>
    </View>
  );
};

export default DeleteBlogs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  deleteIconContainer: {
    position: "absolute",
    top: moderateScale(20),
    left: moderateScale(15),
    zIndex: 1,
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
