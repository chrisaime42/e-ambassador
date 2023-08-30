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
import React, { useState } from "react";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import AppTextInput from "../components/AppTextInput";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { COLORS, colors, sizes } from "../constants/Theme";


const INPUT_OFFSET = 150;

const RegisterScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    telephone: '',
    address: '',
    password: '',
  });
  return (
      //   <KeyboardAvoidingView style={{ flex : 1}} 
      //     behavior={Platform.OS === 'ios' ? 'padding' : ''}
      //   > 
      //   <ScrollView bounces={false} alwaysBounceVertical={false} showsVerticalScrollIndicator={false} >
      //   <SafeAreaView>
      //   <View
      //       style={{
      //         padding: Spacing * 2,
      //       }}
      //     >
      //       <View
      //         style={{
      //           alignItems: "center",
      //         }}
      //       >
      //         <Text
      //           style={{
      //             fontSize: FontSize.xLarge,
      //             color: Colors.primary,
      //             fontFamily: Font["poppins-bold"],
      //             marginVertical: Spacing * 2,
      //           }}
      //         >
      //           Créer un compte
      //         </Text>
      //         <Text
      //           style={{
      //             fontFamily: Font["poppins-regular"],
      //             fontSize: FontSize.small,
      //             maxWidth: "80%",
      //             textAlign: "center",
      //           }}
      //         >
      //           Créez un compte afin d'explorer toutes les fonctionnalités existantes
      //         </Text>
      //       </View>
      //       <View
      //         style={{
      //           marginVertical: Spacing / 10 ,
      //         }}
      //       >
      //         <AppTextInput placeholder="Nom" />
      //         <AppTextInput placeholder="Prenom" />
      //         <AppTextInput placeholder="Email" />
      //         <AppTextInput placeholder="Telephone" />
      //         <AppTextInput placeholder="Addresse" />
      //         <AppTextInput placeholder="Mot de passe" />
      //       </View>

      //       <TouchableOpacity
      //         style={{
      //           padding: Spacing * 2,
      //           backgroundColor: Colors.primary,
      //           marginVertical: Spacing * 1.5,
      //           borderRadius: Spacing,
      //           shadowColor: Colors.primary,
      //           shadowOffset: {
      //             width: 0,
      //             height: Spacing,
      //           },
      //           shadowOpacity: 0.3,
      //           shadowRadius: Spacing,
      //         }}
      //       >
      //         <Text
      //           style={{
      //             fontFamily: Font["poppins-bold"],
      //             color: Colors.onPrimary,
      //             textAlign: "center",
      //             fontSize: FontSize.large,
      //           }}
      //         >
      //           Inscrivez-vous
      //         </Text>
      //       </TouchableOpacity>
      //       <TouchableOpacity
      //         onPress={() => navigate("Login")}
      //         style={{
      //           padding: Spacing,
      //         }}
      //       >
      //         <Text
      //           style={{
      //             fontFamily: Font["poppins-semiBold"],
      //             color: Colors.text,
      //             textAlign: "center",
      //             fontSize: FontSize.small,
      //           }}
      //         >
      //           Déjà un compte? <Text style={{color:Colors.active}}>Connectez-vous</Text>
      //         </Text>
      //       </TouchableOpacity>
      //     </View>
      //   </SafeAreaView>
      //   </ScrollView> 
      // </KeyboardAvoidingView>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
      <View style={[styles.header, { marginTop: Platform.OS == "android" && insets.top}]}>
          <View style={styles.headerAction}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack()
              }}>
              <FeatherIcon name="arrow-left" size={24} />
            </TouchableOpacity>
          </View>

          <Text style={[styles.headerTitle, { alignItems: 'flex-start' }]}>Creer un compte</Text>

          <View style={[styles.headerAction]}>
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}>
              
            </TouchableOpacity>
          </View>
        </View>

        <KeyboardAwareScrollView>
          <View style={styles.form}>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Nom</Text>

              <TextInput
                onChangeText={username => setForm({ ...form, username })}
                placeholder="e.g. Hertz"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.username}
              />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Prenom</Text>

              <TextInput
                onChangeText={firstName => setForm({ ...form, firstName })}
                placeholder="e.g. joel"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.firstName}
              />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Email</Text>

              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                onChangeText={email => setForm({ ...form, email })}
                placeholder="e.g. hertz@example.com"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.email}
              />
            </View>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Telephone</Text>

              <TextInput
                onChangeText={lastName => setForm({ ...form, lastName })}
                placeholder="e.g. +228 96000000"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.lastName}
              />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Addresse</Text>

              <TextInput
                onChangeText={lastName => setForm({ ...form, lastName })}
                placeholder="e.g. +228 96000000"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.lastName}
              />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Mot de passe</Text>

              <TextInput
                autoCorrect={false}
                onChangeText={password => setForm({ ...form, password })}
                placeholder="********"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                secureTextEntry={true}
                value={form.password}
              />
            </View>

            <View style={styles.formAction}>
              <TouchableOpacity
                onPress={() => {
                 
                }}>
                <View style={styles.btn}>
                  <Text style={styles.btnText}>Creer mon compte</Text>
                </View>
              </TouchableOpacity>
            </View>

            <Text style={styles.formFooter}>
            En cliquant sur "Creer mon compte", vous acceptez nos
              <Text style={{ color: '#45464E', fontWeight: '600' }}>
                {' '}
                conditions générales{' '}
              </Text>
              et
              <Text style={{ color: '#45464E', fontWeight: '600' }}>
                {' '}
                notre politique de confidentialité.
              </Text>
              .
            </Text>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: -sizes.height * 0.05,
    paddingHorizontal: 16,
    marginBottom: 20
  },
  headerAction: {
    width: sizes.width * 0.05,
    height: -sizes.height * 0.07,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 21,
    fontWeight: '600',
    color: '#292929',
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 9999,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.mainColor,
    marginBottom: 16,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#181818',
    marginBottom: 36,
  },
  form: {
    paddingHorizontal: 24,
  },
  formAction: {
    marginVertical: 24,
  },
  formFooter: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    color: '#9fa5af',
    textAlign: 'center',
  },
  inputLabel: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1c1c1e',
    marginBottom: 6,
  },
  inputControl: {
    height: 50,
    backgroundColor: '#EFF1F5',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#24262e',
  },
  btnText: {
    fontSize: 17,
    lineHeight: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  input: {
    marginBottom: 10,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderWidth: 1,
    backgroundColor: colors.mainColor,
    borderColor: colors.mainColor,
  },
});