import { Feather } from "@expo/vector-icons";
import React from "react";
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import IconText from "../components/IconText";
import moment from "moment";

const City = ({ weatherData }) => {
  const { name, country, population, sunrise, sunset } = weatherData;
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require("../../assets/sky-2530532_1280.jpg")}
          style={styles.imageLayout}
        >
          <Text style={[styles.cityName, styles.cityText]}>{name}</Text>
          <Text style={[styles.countryName, styles.cityText]}>{country}</Text>
          <View style={[styles.populationWrapper, styles.rowLayout]}>
            <IconText
              iconName={"user"}
              iconColor={"red"}
              bodyText={`Population : ${population}`}
              bodyTextStyles={styles.populationText}
            />
          </View>
          <View style={[styles.riseSetWrapper, styles.rowLayout]}>
            <IconText
              iconName={"sunrise"}
              iconColor={"white"}
              bodyText={moment(sunrise).format("h:mm:ss a")}
              bodyTextStyles={styles.riseSetText}
            />
            <IconText
              iconName={"sunset"}
              iconColor={"white"}
              bodyText={moment(sunset).format("h:mm:ss a")}
              bodyTextStyles={styles.riseSetText}
            />
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default City;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageLayout: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    color: "#fff",
  },
  populationWrapper: {
    justifyContent: "center",
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "red",
  },
  riseSetWrapper: {
    justifyContent: "space-around",
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 20,
    color: "white",
  },
  rowLayout: {
    flexDirection: "row",
    alignItems: "center",
  },
});
