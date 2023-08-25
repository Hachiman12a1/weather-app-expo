import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import City from "./src/screens/City";
import CurrentWeather from "./src/screens/CurrentWeather";
import UpcomingWeather from "./src/screens/UpcomingWeather";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#e91e63",
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
    </NavigationContainer>
  );
}
