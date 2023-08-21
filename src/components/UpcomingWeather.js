import { Feather } from "@expo/vector-icons";
import React from "react";
import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

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
  const WeatherItem = (props) => {
    const { dt_txt, min, max, condition } = props;
    return (
      <View style={styles.item}>
        <Feather name="sun" size={50} color="white" />
        <Text style={styles.date}>{dt_txt}</Text>
        <Text style={styles.temp}>{min}</Text>
        <Text style={styles.temp}>{max}</Text>
      </View>
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
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
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default UpcomingWeather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 5,
    backgroundColor: "pink",
  },
  temp: {
    color: "white",
    fontSize: 20,
  },
  date: {
    color: "white",
    fontSize: 15,
  },
});
