import "react-native-gesture-handler"
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import fonts from "./config/fonts";

import MainNavigator from "./navigation/MainNavigator";
import {  useEffect, useState } from "react";


export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  return !fontsLoaded ? null : (
    <SafeAreaProvider >
      <MainNavigator />
      <StatusBar />
    </SafeAreaProvider>
  );
}
