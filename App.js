import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import Tabs from "./src/components/Tabs";
import useGetWeather from "./src/hooks/useGetWeather";

export default function App() {
  const { loading, error, weatherData } = useGetWeather();

  if (weatherData && weatherData.list) {
    return (
      <NavigationContainer>
        <Tabs weatherData={weatherData} />
      </NavigationContainer>
    );
  }

  return (
    <View style={style.container}>
      <ActivityIndicator size={"large"} color={"blue"} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
  },
});
