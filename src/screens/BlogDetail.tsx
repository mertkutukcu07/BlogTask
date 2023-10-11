import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { singleBlogs } from "../redux/blogSlice";
import Loading from "../components/Loading";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../constants/Colors";
import { moderateScale } from "react-native-size-matters";
const BlogDetail = ({ route }) => {
  const id = route.params;
  const blogs = useSelector((state) => state.blogs.data);
  const loading = useSelector((state) => state.blogs.loading);
  const error = useSelector((state) => state.blogs.error);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(singleBlogs(id));
  }, [dispatch, id]);

  if (loading) {
    return <Loading visible={loading} />;
  }
  console.log(blogs);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>{blogs.title}</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentTitle}>{blogs.content}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BlogDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Colors.black, // Arka plan rengi
  },
  header: {
    backgroundColor: "#4CAF50", // Başlık arka plan rengi
    padding: moderateScale(20),
  },
  title: {
    fontSize: moderateScale(24),
    color: "#ffffff", // Başlık metin rengi
  },
  content: {
    padding: moderateScale(20),
  },
  contentTitle: {
    color: Colors.Colors.white,
  },
});
