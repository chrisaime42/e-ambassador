import {
  Platform,
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
import AppTextInput from "../components/AppTextInput";
import { KeyboardAvoidingView } from "react-native";


const RegisterScreen = ({ navigation: { navigate } }) => {
  return (
        <KeyboardAvoidingView style={{ flex : 1}} 
          behavior={Platform.OS === 'ios' ? 'padding' : ''}
        > 
        <ScrollView bounces={false} alwaysBounceVertical={false} showsVerticalScrollIndicator={false} >
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
                  marginVertical: Spacing * 2,
                }}
              >
                Créer un compte
              </Text>
              <Text
                style={{
                  fontFamily: Font["poppins-regular"],
                  fontSize: FontSize.small,
                  maxWidth: "80%",
                  textAlign: "center",
                }}
              >
                Créez un compte afin d'explorer toutes les fonctionnalités existantes
              </Text>
            </View>
            <View
              style={{
                marginVertical: Spacing / 10 ,
              }}
            >
              <AppTextInput placeholder="Nom" />
              <AppTextInput placeholder="Prenom" />
              <AppTextInput placeholder="Email" />
              <AppTextInput placeholder="Telephone" />
              <AppTextInput placeholder="Addresse" />
              <AppTextInput placeholder="Mot de passe" />
            </View>

            <TouchableOpacity
              style={{
                padding: Spacing * 2,
                backgroundColor: Colors.primary,
                marginVertical: Spacing * 1.5,
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
                Inscrivez-vous
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate("Login")}
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
                Déjà un compte? <Text style={{color:Colors.active}}>Connectez-vous</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        </ScrollView> 
      </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
