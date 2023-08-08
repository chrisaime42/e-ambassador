import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import Colors from "../constants/Colors";
import TabNavigator from "./TabNavigator";
import { createStackNavigator } from "@react-navigation/stack";


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
       <Stack.Navigator>
    <Stack.Screen
        name="Root"
        component={TabNavigator}
        options={{
            headerShown: false,
        }}
     />
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
