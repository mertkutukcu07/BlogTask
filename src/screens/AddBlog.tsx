import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { moderateScale } from "react-native-size-matters";
import { useSelector, useDispatch } from "react-redux";
import { addBlogs } from "../redux/blogSlice";
import Loading from "../components/Loading";

const AddBlog = ({ navigation }) => {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const blogs = useSelector((state) => state.blogs.data);
  const loading = useSelector((state) => state.blogs.loading);
  const error = useSelector((state) => state.blogs.error);
  const dispatch = useDispatch();
  const handleAddBlog = () => {
    const blogData = {
      title: blogTitle,
      content: blogContent,
    };

    dispatch(addBlogs(blogData));
    setBlogTitle("");
    setBlogContent("");
  };
  if (loading) {
    return <Loading visible={loading} />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Blog Başlığı"
          value={blogTitle}
          onChangeText={(text) => setBlogTitle(text)}
        />
        <TextInput
          style={[styles.input, styles.multilineInput]}
          placeholder="Blog İçeriği"
          multiline
          numberOfLines={4}
          value={blogContent}
          onChangeText={(text) => setBlogContent(text)}
        />
      </View>
      <TouchableOpacity style={styles.addButton} onPress={handleAddBlog}>
        <Text style={styles.buttonText}>Ekle</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    padding: moderateScale(20),
  },
  inputContainer: {
    marginBottom: moderateScale(20),
  },
  input: {
    backgroundColor: "white",
    borderRadius: moderateScale(5),
    padding: moderateScale(10),
    marginBottom: moderateScale(10),
    color: "black",
  },
  multilineInput: {
    height: moderateScale(150),
    textAlignVertical: "top",
  },
  addButton: {
    backgroundColor: "#4CAF50",
    borderRadius: moderateScale(5),
    padding: moderateScale(15),
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default AddBlog;
