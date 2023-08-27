import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CurrentWeather from "../screens/CurrentWeather";
import UpcomingWeather from "../screens/UpcomingWeather";
import City from "../screens/City";
import { Feather } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

const Tabs = ({ weatherData }) => {
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
      >
        {() => <CurrentWeather weatherData={weatherData?.list[0]} />}
      </Tab.Screen>
      <Tab.Screen
        name="Upcoming"
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
      >
        {() => <UpcomingWeather weatherData={weatherData?.list} />}
      </Tab.Screen>
      <Tab.Screen
        name="City"
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
      >
        {() => <City weatherData={weatherData?.city} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default Tabs;
