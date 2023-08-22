import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const IconText = (props) => {
  const { iconName, iconColor, bodyText, bodyTextStyles } = props;
  return (
    <View style={styles.container}>
      <Feather name={iconName} size={50} color={iconColor} />
      <Text style={[styles.textTheme, bodyTextStyles]}>{bodyText}</Text>
    </View>
  );
};

export default IconText;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  textTheme: {
    fontWeight: "bold",
  },
});
