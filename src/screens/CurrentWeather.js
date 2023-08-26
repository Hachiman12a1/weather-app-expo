import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import RowText from "../components/RowText";
import { weatherType } from "../utilities/weatherType";

export default function CurrentWeather() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <Feather name="sun" size={100} color="black" />
          <Text style={styles.temp}>6</Text>
          <Text style={styles.feels}>Feels like 5</Text>
          <RowText
            containerStyles={styles.highLowWrapper}
            messageOneStyles={styles.highLow}
            messageTwoStyles={styles.highLow}
            messageOne={"High : 8"}
            messageTwo={"Low : 8"}
          />
        </View>
        <RowText
          containerStyles={styles.bodyWrapper}
          messageOneStyles={styles.description}
          messageTwoStyles={styles.message}
          messageOne={"It is sunny"}
          messageTwo={weatherType["Thunderstorm"].message}
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
