import React from "react";
import Fontisto from "@expo/vector-icons/Fontisto";
import { Tabs } from "expo-router";
import { Pressable } from "react-native";

import Colors from "@/constants/Colors";
import { useTheme } from "@/context/ThemeContext";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Fontisto>["name"];
  color: string;
}) {
  return <Fontisto size={24} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const { effectiveTheme, toggleTheme } = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[effectiveTheme].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        headerStyle: {
          backgroundColor: Colors[effectiveTheme].background,
        },
        headerTitleStyle: {
          color: Colors[effectiveTheme].text,
        },
        tabBarStyle: {
          backgroundColor: Colors[effectiveTheme].background,
        },
        headerTitleAlign: "left",
        headerShadowVisible: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "About",
          tabBarIcon: ({ color }) => <TabBarIcon name="person" color={color} />,
          headerRight: () => (
            <Pressable onPress={toggleTheme}>
              {({ pressed }) => (
                <Fontisto
                  name={effectiveTheme === "dark" ? "day-sunny" : "night-clear"}
                  size={25}
                  color={Colors[effectiveTheme].text}
                  style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Contact",
          tabBarIcon: ({ color }) => <TabBarIcon name="email" color={color} />,
          headerRight: () => (
            <Pressable onPress={toggleTheme}>
              {({ pressed }) => (
                <Fontisto
                  name={effectiveTheme === "dark" ? "day-sunny" : "night-clear"}
                  size={25}
                  color={Colors[effectiveTheme].text}
                  style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          ),
        }}
      />
    </Tabs>
  );
}
