import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Logo from "../assets/images/favicon.png"
import Colors from '../constants/Colors'
import { colors, sizes } from '../constants/Theme'

const LoginScreen = ({navigation}) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  return (
  
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <ScrollView showsVerticalScrollIndicator={false} alwaysBounceVertical={false} alwaysBounceHorizontal={false} automaticallyAdjustKeyboardInsets={true}>
        <View style={styles.container}>
        <View style={styles.header}>
          <Image
            alt=""
            resizeMode="contain"
            style={styles.headerImg}
            source={Logo}
          />

          <Text style={styles.title}>
          Connectez-vous <Text style={{ color: Colors.red }}>E-ambassador</Text>
          </Text>

          <Text style={styles.subtitle}>
          Devenez un ambassadeur actif de notre plateforme.
          </Text>
        </View>
        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Email</Text>

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={email => setForm({ ...form, email })}
              placeholder="hertz@example.com"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.email}
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
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ForgotPassword");
            }}
            style={{ marginTop: 'auto' }}>
            <Text style={[styles.formFooter, { alignSelf: "flex-end", right: 2}]}>
              <Text>Mot de passe oublié?</Text>
            </Text>
          </TouchableOpacity>
          <View style={styles.formAction}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Root")
              }}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Connectez-vous</Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Register");
            }}
            style={{ marginTop: 'auto' }}>
            <Text style={styles.formFooter}>
             Pas de compte?{' '}
              <Text style={{ color: Colors.red}} >Inscrivez-vous</Text>
            </Text>
          </TouchableOpacity>
        </View>
        </View>
        </ScrollView>
    </SafeAreaView>
   
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  header: {
    marginVertical: sizes.height * 0.05,
  },
  headerImg: {
    width: sizes.width * 0.5,
    height: sizes.height * 0.2,
    alignSelf: 'center',
   // marginBottom: 20,
  },
  title: {
    fontSize: sizes.width * 0.04,
    fontWeight: '800',
    color: '#1d1d1d',
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '500',
    color: '#929292',
    textAlign: 'center',
  },
  form: {
    marginBottom: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  formAction: {
    marginVertical: 24,
  },
  formFooter: {
    fontSize: sizes.width * 0.04,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
    letterSpacing: 0.15,
  },
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputControl: {
    height: 50,
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#000',
    borderColor: '#000',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
})