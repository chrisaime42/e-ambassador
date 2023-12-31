import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors, sizes } from '../constants/Theme';
import Colors from '../constants/Colors';

const INPUT_OFFSET = 50;


const ForgotPaswordScreen = ({ navigation  }) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Entrez votre numéro</Text>

          <Text style={styles.subtitle}>
          Vous recevrez un code à 4 chiffres pour vérifier votre compte.
          </Text>
        </View>

        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>+228</Text>

            <TextInput
              keyboardType="phone-pad"
              onChangeText={phone => setForm({ ...form, phone })}
              placeholder="Numero de telephone"
              placeholderTextColor="#505060"
              returnKeyType="done"
              style={styles.inputControl}
              value={form.phone}
            />
          </View>

          <View style={styles.formAction}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('VerifyPhoneNumber')
              }}>
              <View style={styles.btn}>
                <View style={{ width: 32 }} />

                <Text style={styles.btnText}>Continuer</Text>

                <MaterialCommunityIcons
                  color="#fff"
                  name="arrow-right"
                  size={20}
                  style={{ marginLeft: 12 }}
                />
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity
            onPress={() => {
              navigation.navigate("Register")
            }}
            style={{ marginTop: 'auto' }}>
            <Text style={styles.formActionSpacer}>
            <Text style={styles.formFooter}>
            Pas membre? <Text style={{ color: Colors.red }}>Creer un compte</Text>
            </Text>
            </Text>
            
          </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPaswordScreen;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  header: {
    marginVertical: 36,
  },
  headerImg: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 36,
  },
  title: {
    fontSize: sizes.width * 0.07,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
  },
  form: {
    marginBottom: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  formAction: {
    marginVertical: 12,
  },
  formActionSpacer: {
    marginVertical: 32,
    fontSize: 14,
    fontWeight: '600',
    color: '#4b4858',
    textAlign: 'center',
  },
  formFooter: {
    fontSize: 14,
    fontWeight: '600',
    color: '#51505a',
    textAlign: 'center',
  },
  inputLabel: {
    position: 'absolute',
    width: INPUT_OFFSET,
    lineHeight: 44,
    top: 0,
    left: 0,
    bottom: 0,
    marginHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 12,
    fontWeight: '500',
    color: '#222',
    zIndex: 9,
    //paddingLeft: 2,
  },
  btnSecondary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: 'transparent',
    borderColor: '#000',
    marginBottom: 12,
  },
  input: {
    marginBottom: 16,
  },
  inputControl: {
    height: 44,
    backgroundColor: '#f3eff6',
    paddingLeft: INPUT_OFFSET,
    paddingRight: 24,
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
    backgroundColor: "#000",
    borderColor: '#000',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
  btnSecondaryText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#000',
  },
});
