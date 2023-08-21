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

const DATA = [
  {
    dt_txt: "2022-08-30 16:00:00",
    main: {
      temp_min: 296.34,
      temp_max: 298.24,
    },
    weather: [
      {
        main: "Rain",
      },
    ],
  },
  {
    dt_txt: "2022-08-30 17:00:00",
    main: {
      temp_min: 296.2,
      temp_max: 296.31,
    },
    weather: [
      {
        main: "Clear",
      },
    ],
  },
  {
    dt_txt: "2022-08-30 18:00:00",
    main: {
      temp_min: 292.84,
      temp_max: 294.94,
    },
    weather: [
      {
        main: "Sub",
      },
    ],
  },
  {
    dt_txt: "2022-09-03 15:00:00",
    main: {
      temp_min: 294.14,
      temp_max: 294.14,
    },
    weather: [
      {
        main: "Clouds",
      },
    ],
  },
];

const UpcomingWeather = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require("../../assets/sunset-3325080_1280.jpg")}
          style={styles.image}
        >
          <Text>Upcoming Weather</Text>
          <FlatList
            data={DATA}
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
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "royalblue",
  },
  image: {
    flex: 1,
  },
});
