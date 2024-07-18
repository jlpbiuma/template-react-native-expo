// App.js
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, ActivityIndicator, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styled } from "nativewind";
import Login from "./views/Login";

const HomeScreen = styled(() => (
  <View className="flex-1 items-center justify-center bg-white">
    <Text className="text-2xl mb-6">Home Screen</Text>
  </View>
));

const ProfileScreen = styled(() => (
  <View className="flex-1 items-center justify-center bg-white">
    <Text className="text-2xl mb-6">Profile Screen</Text>
  </View>
));

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
    <Tab.Screen name="Test" component={ProfileScreen} />
  </Tab.Navigator>
);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem("userToken");
        if (token) {
          // Assume a login function that returns a promise
          // loginWithToken(token).then(setUserToken).catch(() => setUserToken(null));
          setUserToken(token); // Directly set token for example
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    checkToken();
  }, []);

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {userToken ? (
          <Stack.Screen name="AppTabs" component={AppTabs} />
        ) : (
          <Stack.Screen name="Login">
            {(props) => <Login {...props} setUserToken={setUserToken} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
