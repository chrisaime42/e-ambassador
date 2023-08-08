import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
const { height } = Dimensions.get("window");


const SettingScreen = ({ navigation : { navigate}}) => {
  return (
    <SafeAreaView >
        <View style={{ justifyContent: "center", alignItems: "center", }}>
        <Text>Parametre</Text>
        </View>
    </SafeAreaView>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({});
