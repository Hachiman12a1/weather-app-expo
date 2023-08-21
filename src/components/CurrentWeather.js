import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function CurrentWeather() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <Feather name="sun" size={100} color="black" />
          <Text style={styles.temp}>6</Text>
          <Text style={styles.feels}>Feels like 5</Text>
          <View style={styles.highLowWrapper}>
            <Text style={styles.highLow}>High : 8</Text>
            <Text style={styles.highLow}>Low : 8</Text>
          </View>
        </View>
        <View style={styles.bodyWrapper}>
          <Text style={styles.description}>It is sunny</Text>
          <Text style={styles.message}>Its perfect t-shirt weather</Text>
        </View>
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
