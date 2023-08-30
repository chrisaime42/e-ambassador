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
import Colors from '../constants/Colors';

const INPUT_OFFSET = 50;


const VerifyPhoneNumber = ({ navigation}) => {
  const [form, setForm] = useState({
    telephone: '',
    code: '',
  });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Reinitialiser</Text>

          <Text style={styles.subtitle}>
          Entrer le code que vous avez reçu par sms au Numero +22800000000.
          </Text>
        </View>

        <View style={styles.form}>
          <View style={styles.input}>
            <TextInput
              keyboardType="phone-pad"
              onChangeText={code => setForm({ ...form, code })}
              placeholder="Code eg: 00xxxx"
              placeholderTextColor="#505060"
              returnKeyType="done"
              style={styles.inputControl}
              value={form.phone}
            />
          </View>

          <View style={styles.formAction}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Login')
              }}>
              <View style={styles.btn}>
                <View style={{ width: 32 }} />

                <Text style={styles.btnText}>Reinitialiser</Text>

                <MaterialCommunityIcons
                  color="#fff"
                  name="arrow-right"
                  size={20}
                  style={{ marginLeft: 12 }}
                />
              </View>
            </TouchableOpacity>

            <Text style={styles.formActionSpacer}></Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              // handle link
            }}
            style={{ marginTop: 'auto' }}>
            <Text style={styles.formFooter}>
            Code non reçu? <Text style={{ color: Colors.red }}>Renvoyer le code</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VerifyPhoneNumber;

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
    fontSize: 32,
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
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    zIndex: 9,
    paddingLeft: 2,
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
    height: 50,
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
    backgroundColor: '#000',
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
