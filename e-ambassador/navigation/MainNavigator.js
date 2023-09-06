import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import Colors from "../constants/Colors";
import TabNavigator from "./TabNavigator";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardingScreen from "../screens/OnboardingScreen";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ForgotPaswordScreen from "../screens/ForgotPasswordScreen";
import VerifyPasswordOTPScreen from "../screens/VerifyPasswordOTPScreen";
import CreateNewPasswordScreen from "../screens/CreateNewPasswordScreen";
import Notification from "../screens/NotificationScreen";
import Portefeuille from "../screens/PortefeuilleScreen";
import CustomersScreen from "../screens/CustomersScreen";
import VerifyPhoneNumber from "../screens/verifyPhoneNumberScreen";


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.background,
  },
};

const Stack = createStackNavigator();
 
const MainNavigator = () => {
  return (
    <NavigationContainer theme={theme}>
       <Stack.Navigator
         screenOptions={{
            headerShown: false,
            tabBarShowLabel: false, 
            headerShadowVisible: true,
        }}
      initialRouteName="Root"
       >
       <Stack.Screen name="Onbording" component={OnboardingScreen} />
       <Stack.Screen name="Login" component={LoginScreen} />
       <Stack.Screen name="Home" component={HomeScreen} />
       <Stack.Screen name="Register" component={RegisterScreen} />
       <Stack.Screen name="ForgotPassword" 
       component={ForgotPaswordScreen} />
       <Stack.Screen name="VerifyPhoneNumber" component={VerifyPhoneNumber} />
        <Stack.Screen
            name="Root"
            component={TabNavigator}
            options={{
                headerShown: false,
            }}
            
        /> 
            {/* <Stack.Screen  name="Onboarding" component={OnboardingScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPaswordScreen}  />
            <Stack.Screen name="VerifyPasswordOTP" component={VerifyPasswordOTPScreen} />
            <Stack.Screen name="CreateNewPassword" component={CreateNewPasswordScreen} />
            <Stack.Screen name="Notification" component={Notification} />
            <Stack.Screen name="Portefeuille" component={Portefeuille} />
            <Stack.Screen name="  " component={CustomersScreen} /> */}
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
// const RootNavigator = () => {
//   return (
//     <Stack.Navigator>
//     <Stack.Screen
//         name="Root"
//         component={TabNavigator}
//         options={{
//             headerShown: false,
//         }}
//      />
//       <Stack.Screen name="Welcome" component={Welcome} />
//       <Stack.Screen  name="Onboarding" component={OnboardingScreen} />
//       <Stack.Screen name="Login" component={LoginScreen} />
//       <Stack.Screen name="Register" component={RegisterScreen} />
//       <Stack.Screen name="ForgotPassword" component={ForgotPaswordScreen}  />
//       <Stack.Screen name="VerifyPasswordOTP" component={VerifyPasswordOTPScreen} />
//       <Stack.Screen name="CreateNewPassword" component={CreateNewPasswordScreen} />
//     </Stack.Navigator>
//   );
//}
