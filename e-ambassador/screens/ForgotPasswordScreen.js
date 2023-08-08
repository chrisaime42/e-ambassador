import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import { Ionicons } from "@expo/vector-icons";
import AppTextInput from "../components/AppTextInput";


const ForgotPaswordScreen = ({ navigation : { navigate } }) => {
  return (
    <KeyboardAvoidingView style={{ flex : 1}} 
          behavior={Platform.OS === 'ios' ? 'padding' : ''}
        > 
        <ScrollView alwaysBounceVertical={false} showsVerticalScrollIndicator={false} >
        <SafeAreaView>
          <View
            style={{
              padding: Spacing * 2,
            }}
          >
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: FontSize.xLarge,
                  color: Colors.primary,
                  fontFamily: Font["poppins-bold"],
                  marginVertical: Spacing * 3,
                }}
              >
                Réinitialiser
              </Text>
              <Text
                style={{
                  fontFamily: Font["poppins-semiBold"],
                  fontSize: FontSize.small,
                  maxWidth: "80%",
                  textAlign: "center",
                }}
              >
                Saissez votre numero de telephone pour reinitialiser votre mot de passe!
              </Text>
            </View>
            <View
              style={{
                marginVertical: Spacing * 3,
              }}
            >
              <AppTextInput placeholder="Ex: +228xxxxxxxx" />
            </View>
            <TouchableOpacity
              onPress={() => navigate("VerifyPasswordOTP")}
              style={{
                padding: Spacing * 2,
                backgroundColor: Colors.primary,
                marginVertical: Spacing * 3,
                borderRadius: Spacing,
                shadowColor: Colors.primary,
                shadowOffset: {
                  width: 0,
                  height: Spacing,
                },
                shadowOpacity: 0.3,
                shadowRadius: Spacing,
              }}
            >
              <Text
                style={{
                  fontFamily: Font["poppins-bold"],
                  color: Colors.onPrimary,
                  textAlign: "center",
                  fontSize: FontSize.large,
                }}
              >
                Continuer
              </Text>
            </TouchableOpacity>
            <View
              style={{
                padding: Spacing,
              }}
            >
              <Text
                style={{
                  fontFamily: Font["poppins-semiBold"],
                  color: Colors.text,
                  textAlign: "center",
                  fontSize: FontSize.small,
                }}
              >
                <TouchableOpacity
                onPress={() => navigate("Login")}
                  style={{
                    padding: Spacing,
                    backgroundColor: Colors.gray,
                    borderRadius: Spacing / 2,
                    marginHorizontal: Spacing,
                  }}
                >
                  <Ionicons
                    name="arrow-back"
                    color={Colors.text}
                    size={Spacing * 2}
                  />
                </TouchableOpacity>
              </Text>
            </View>

            {/* <View
              style={{
                marginVertical: Spacing * 3,
              }}
            >
              <Text
                style={{
                  fontFamily: Font["poppins-semiBold"],
                  color: Colors.primary,
                  textAlign: "center",
                  fontSize: FontSize.small,
                }}
              >
                Or continue with
              </Text>

              <View
                style={{
                  marginTop: Spacing,
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <TouchableOpacity
                  style={{
                    padding: Spacing,
                    backgroundColor: Colors.gray,
                    borderRadius: Spacing / 2,
                    marginHorizontal: Spacing,
                  }}
                >
                  <Ionicons
                    name="logo-google"
                    color={Colors.text}
                    size={Spacing * 2}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    padding: Spacing,
                    backgroundColor: Colors.gray,
                    borderRadius: Spacing / 2,
                    marginHorizontal: Spacing,
                  }}
                >
                  <Ionicons
                    name="logo-apple"
                    color={Colors.text}
                    size={Spacing * 2}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    padding: Spacing,
                    backgroundColor: Colors.gray,
                    borderRadius: Spacing / 2,
                    marginHorizontal: Spacing,
                  }}
                >
                  <Ionicons
                    name="logo-facebook"
                    color={Colors.text}
                    size={Spacing * 2}
                  />
                </TouchableOpacity>
              </View>
            </View> */}
          </View>
        </SafeAreaView>
        </ScrollView>
      </KeyboardAvoidingView>
   
  );
};

export default ForgotPaswordScreen;

const styles = StyleSheet.create({});
