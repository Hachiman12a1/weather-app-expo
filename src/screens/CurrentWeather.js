import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import RowText from "../components/RowText";
import { weatherType } from "../utilities/weatherType";

export default function CurrentWeather({ weatherData }) {
  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather,
  } = weatherData;
  const weatherCondition = weather[0]?.main;

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={[
          styles.wrapper,
          { backgroundColor: weatherType[weatherCondition].backgroundColor },
        ]}
      >
        <View style={styles.container}>
          <Feather
            name={weatherType[weatherCondition].icon}
            size={100}
            color="white"
          />
          <Text style={styles.temp}>{temp}</Text>
          <Text style={styles.feels}>{`Feels like ${feels_like} °`}</Text>
          <RowText
            containerStyles={styles.highLowWrapper}
            messageOneStyles={styles.highLow}
            messageTwoStyles={styles.highLow}
            messageOne={`High : ${temp_max}° `}
            messageTwo={`Low : ${temp_min}°`}
          />
        </View>
        <RowText
          containerStyles={styles.bodyWrapper}
          messageOneStyles={styles.description}
          messageTwoStyles={styles.message}
          messageOne={weather[0].description}
          messageTwo={weatherType[weatherCondition].message}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "pink",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  temp: {
    color: "#000",
    fontSize: 48,
  },
  feels: {
    color: "#000",
    fontSize: 30,
  },
  highLow: {
    color: "#000",
    fontSize: 20,
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 30,
  },
});
