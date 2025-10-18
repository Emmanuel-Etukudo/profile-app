import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

interface SubtitleProps {
  text: string;
  iconName?: React.ComponentProps<typeof Ionicons>["name"];
}

const Subtitle = ({ text, iconName }: SubtitleProps) => {
  return (
    <View style={{ flexDirection: "row", columnGap: 6 }}>
      {iconName && <Ionicons name={iconName} size={16} color="white" />}
      <Text style={styles.subTitle}>{text}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 14,
    fontWeight: "normal",
    color: "white",
  },
});
