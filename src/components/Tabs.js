import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CurrentWeather from "../screens/CurrentWeather";
import UpcomingWeather from "../screens/UpcomingWeather";
import City from "../screens/City";
import { Feather } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
        tabBarStyle: {
          backgroundColor: "lightblue",
        },
        headerStyle: {
          backgroundColor: "lightblue",
        },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 25,
          color: "#e91e63",
        },
      }}
    >
      <Tab.Screen
        name="Current"
        component={CurrentWeather}
        options={{
          tabBarLabel: "Current",
          tabBarIcon: ({ focused }) => (
            <Feather
              name="droplet"
              size={25}
              color={focused ? "#e91e63" : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Upcoming"
        component={UpcomingWeather}
        options={{
          tabBarLabel: "Upcoming",
          tabBarIcon: ({ focused }) => (
            <Feather
              name="clock"
              size={25}
              color={focused ? "#e91e63" : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="City"
        component={City}
        options={{
          tabBarLabel: "City",
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={25}
              color={focused ? "#e91e63" : "black"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
