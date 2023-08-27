import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import Tabs from "./src/components/Tabs";
import useGetWeather from "./src/hooks/useGetWeather";
import ErrorItem from "./src/components/ErrorItem";

export default function App() {
  const [loading, error, weatherData] = useGetWeather();

  return (
    <View style={style.container}>
      {weatherData && weatherData?.list && (
        <NavigationContainer>
          <Tabs weatherData={weatherData} />
        </NavigationContainer>
      )}
      {error && <ErrorItem />}
      {loading && <ActivityIndicator size={"large"} color={"blue"} />}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
  },
});
