import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import { Entypo } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import BlogDetail from "../screens/BlogDetail";
import AddBlog from "../screens/AddBlog";
import DeleteBlog from "../screens/DeleteBlog";
const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "AddBlog") {
            iconName = focused ? "plus" : "plus";
          } else if (route.name === "DeleteBlog") {
            iconName = focused ? "trash" : "trash";
          }

          // You can return any component that you like here!
          return <Entypo name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: Colors.Colors.white,
        tabBarInactiveTintColor: Colors.Colors.gray,
        tabBarStyle: { backgroundColor: Colors.Colors.black },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Anasayfa",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="AddBlog"
        component={AddBlog}
        options={{
          tabBarLabel: "Blog Yazısı Ekle",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="DeleteBlog"
        component={DeleteBlog}
        options={{
          tabBarLabel: "Blog Yazısı Sil",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="BlogDetail"
        component={BlogDetail}
        options={{
          tabBarButton: () => null,
          tabBarLabel: "Anasayfa",
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
