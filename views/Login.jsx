// components/Login.js
import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { styled } from "nativewind";
import AsyncStorage from "@react-native-async-storage/async-storage";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);
const StyledButton = styled(Button);

const Login = ({ setUserToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // Perform login logic here
    if (email === "test@example.com" && password === "password") {
      const token = "dummy-token"; // Replace with actual token from API
      await AsyncStorage.setItem("userToken", token);
      setUserToken(token);
      Alert.alert("Login successful");
    } else {
      Alert.alert("Login failed", "Invalid email or password");
    }
  };

  return (
    <StyledView className="flex-1 justify-center px-4">
      <StyledText className="text-xl mb-2">Email</StyledText>
      <StyledTextInput
        className="h-10 border border-gray-400 mb-4 px-2"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <StyledText className="text-xl mb-2">Password</StyledText>
      <StyledTextInput
        className="h-10 border border-gray-400 mb-4 px-2"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <StyledButton title="Login" onPress={handleLogin} />
    </StyledView>
  );
};

export default Login;
