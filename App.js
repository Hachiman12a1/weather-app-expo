import React from "react";
import { StyleSheet, View } from "react-native";
import CurrentWeather from "./src/components/CurrentWeather";
import UpcomingWeather from "./src/components/UpcomingWeather";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <CurrentWeather /> */}
      <UpcomingWeather />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
