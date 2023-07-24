import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import Colors from "../constants/Colors";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import Welcome from "../screens/WelcomeScreen";
import ForgotPaswordScreen from "../screens/ForgotPasswordScreen";
import VerifyPasswordOTPScreen from "../screens/VerifyPasswordOTPScreen";
import { Text } from "react-native";
import CreateNewPasswordScreen from "../screens/CreateNewPasswordScreen";


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.background,
  },
};

export default function Navigation() {
  return (
    <NavigationContainer theme={theme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPaswordScreen}  />
      <Stack.Screen name="VerifyPasswordOTP" component={VerifyPasswordOTPScreen} />
      <Stack.Screen name="CreateNewPassword" component={CreateNewPasswordScreen} />
      
    </Stack.Navigator>
  );
}
