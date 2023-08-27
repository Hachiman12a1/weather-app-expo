import { Feather } from "@expo/vector-icons";
import React from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { WeatherItem } from "../components/WeatherItem.js";

const UpcomingWeather = ({ weatherData }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require("../../assets/sunset-3325080_1280.jpg")}
          style={styles.image}
        >
          <FlatList
            data={weatherData}
            renderItem={({ item }) => (
              <WeatherItem
                dt_txt={item.dt_txt}
                min={item.main.temp_min}
                max={item.main.temp_max}
                condition={item.weather[0].main}
              />
            )}
            keyExtractor={(item) => item.dt_txt}
          />
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default UpcomingWeather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "royalblue",
  },
  image: {
    flex: 1,
  },
});
