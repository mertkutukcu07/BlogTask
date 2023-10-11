import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import Colors from "../constants/Colors";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllBlogs } from "../redux/blogSlice";
import HomeBlogs from "../components/HomeBlogs";
import Loading from "../components/Loading";
import { AntDesign } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import DeleteBlogs from "../components/DeleteBlogs";
const DeleteBlog = () => {
  const blogs = useSelector((state) => state.blogs.data);
  const loading = useSelector((state) => state.blogs.loading);
  const error = useSelector((state) => state.blogs.error);
  const dispatch = useDispatch();

  useFocusEffect(
    React.useCallback(() => {
      dispatch(fetchAllBlogs());
    }, [dispatch])
  );

  if (loading) {
    return <Loading visible={loading} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bodyC}>
        <FlatList
          data={blogs}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <DeleteBlogs data={item} />}
          refreshing={loading}
          onRefresh={() => dispatch(fetchAllBlogs())}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
};

export default DeleteBlog;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Colors.black,
  },
  bodyC: {},
  addBlog: {
    backgroundColor: Colors.Colors.white,
    width: moderateScale(165),
    height: moderateVerticalScale(195),
    margin: moderateScale(10),
    justifyContent: "center",
    alignItems: "center",
  },
});
