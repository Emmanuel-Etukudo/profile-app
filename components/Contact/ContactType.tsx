import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Fontisto, Ionicons } from "@expo/vector-icons";

interface ContactTypeProps {
  text: string;
  subtext: string;
  iconName?: React.ComponentProps<typeof Ionicons>["name"];
}

const ContactType = ({ text, subtext, iconName }: ContactTypeProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        columnGap: 6,
        backgroundColor: "white",
        paddingHorizontal: 12,
        paddingVertical: 20,
        borderRadius: 8,
        marginTop: 12,
      }}
    >
      <View style={{ flexDirection: "row", columnGap: 6 }}>
        {iconName && <Ionicons name={iconName} size={16} color="black" />}
        <View>
          <Text style={styles.subTitle}>{text}</Text>
          <Text style={styles.subTitle}>{subtext}</Text>
        </View>
      </View>
      <Fontisto name="angle-right" size={16} color="black" />
    </View>
  );
};

export default ContactType;

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 14,
    fontWeight: "normal",
    color: "black",
  },
});
