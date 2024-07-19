import { View, Text } from "react-native";
import { Slot } from "expo-router";

export default function Layout() {
  return (
    <View className="bg-black flex-1 items-center justify-center">
      <Slot />
    </View>
  );
}
