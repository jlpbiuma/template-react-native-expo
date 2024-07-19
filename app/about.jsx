import { ScrollView, Text } from "react-native";

export default function About() {
  return (
    <ScrollView>
      <Text className="text-blue-400 font-bold mb-8 text-2xl">About</Text>
      <Text className="text-white">
        This is a simple app that demonstrates how to use the Expo Router
        library.
      </Text>
    </ScrollView>
  );
}
