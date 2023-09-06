import { Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, colors, shadow, sizes, spacing } from '../constants/Theme';
import BalanceAccount from '../components/BalanceAccount';
import Font from '../constants/Font';
import Button from '../components/Button';
import TransactionHistory from '../components/TransactionHistory';
import Colors from '../constants/Colors';
import RBSheet from 'react-native-raw-bottom-sheet';
import FeatherIcon from 'react-native-vector-icons/Feather';

const items = [
  {
    img: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    name: 'Rosie',
  },
  {
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80',
    name: 'Lorraine',
  },
  {
    img: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    name: 'Knapp',
  },
  {
    img: 'https://images.unsplash.com/photo-1553240799-36bbf332a5c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    name: 'Bell',
  },
  {
    img: 'https://images.unsplash.com/photo-1573497019236-17f8177b81e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    name: 'Shelby',
  },
  {
    img: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
    name: 'Bernard',
  },
  {
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
    name: 'Elma',
  },
];

const PortefeuilleScreen = () => {
  const [form, setForm] = useState({
    amount: '',
    telephone: '',
  });
  const sheet = React.useRef();
  const [selected, setSelected] = React.useState(0);
  function openSheet() {
    return (
      sheet.current.open()
    )
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
      <View style={styles.header}>
            <View>
              <Text style={styles.headerTitle}>Mon portefeuille</Text>
            </View>

            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}>
             
            </TouchableOpacity>
          </View>
        <ScrollView showsVerticalScrollIndicator={false} >
          <View style={styles.balance}>
            <Text style={styles.balanceTitle}>Mon compte</Text>

            <Text style={styles.balanceValue}>
              128,300
              <Text style={{ fontSize: sizes.width * 0.05, fontWeight: '400' }}> ICE</Text>
            </Text>
            
          </View>
          {/* <View style={{ paddingHorizontal: sizes.width * 0.1, paddingVertical: 12 }}>
          <TouchableOpacity
              onPress={() => {
                openSheet()
              }}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Retirer</Text>
              </View>
          </TouchableOpacity>
          </View> */}
          {/* <View style={styles.send}>
            
          </View> */}

          {/* <View style={styles.placeholder}>
            <View style={styles.placeholderInset}>
           
            </View>
          </View> */}
        </ScrollView>
      </View>
      <RBSheet
        customStyles={{ container: styles.sheet }}
        height={300}
        openDuration={250}
        ref={sheet}>
        <View style={styles.sheetHeader}>
          <Text style={styles.sheetTitle}>Retrait</Text>
          <Text style={styles.sheetText}>
              Tapez le montant
          </Text>
        </View>
        <View style={styles.sheetBody}>
          <View style={styles.sheetBodyOptions}>
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="numeric"
                onChangeText={amount => setForm({ ...form, amount })}
                placeholder="Eg: 100000"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.amount}
            />
             <TextInput 
              editable={false}
              placeholder='ICE'
              placeholderTextColor={colors.textColor}
              style={[styles.inputControl2]}
              textAlign='center'
             />
          </View>

          <TouchableOpacity style={styles.btnSheet}>
            <Text style={styles.btnTextSheet}>continuer</Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
    </SafeAreaView>
  )
}

export default PortefeuilleScreen;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  balance: {
    //backgroundColor: colors.mainColor,
    borderRadius: 24,
    marginTop: 32,
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  balanceTitle: {
    fontSize: sizes.width * 0.04,
    fontWeight: '600',
    color: '#000',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  balanceValue: {
    fontSize: sizes.width * 0.13,
    fontWeight: '700',
    color: '#000',
    marginTop: 8,
  },
  send: {
    marginVertical: 32,
  },
  sendTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  sendScroll: {
    marginHorizontal: -8,
  },
  sendUser: {
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendUserAvatar: {
    width: 54,
    height: 54,
    borderRadius: 9999,
    marginBottom: 6,
  },
  sendUserName: {
    fontSize: 15,
    color: '#1e1e1e',
    fontWeight: '500',
    textAlign: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerBadge: {
    fontSize: 15,
    fontWeight: '400',
    color: '#a3a3a3',
    marginBottom: 4,
  },
  headerTitle: {
    fontSize: sizes.width * 0.07,
    fontWeight: '700',
    color: '#121212',
  },
  placeholder: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    height: 400,
    marginTop: 0,
    padding: 0,
  },
  placeholderInset: {
    borderWidth: 4,
    borderColor: '#e5e7eb',
    borderStyle: 'dashed',
    borderRadius: 9,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  avatar: {
    position: 'relative',
  },
  avatarImg: {
    width: 48,
    height: 48,
    borderRadius: 9999,
  },
  avatarNotification: {
    position: 'absolute',
    borderRadius: 9999,
    borderWidth: 2,
    borderColor: '#fff',
    top: 0,
    right: -2,
    width: 14,
    height: 14,
    backgroundColor: '#d1d5db',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    backgroundColor: "transparent",
    borderColor: 'transparent',
  },
  btnText: {
    fontSize: sizes.width * 0.05,
    lineHeight: 24,
    fontWeight: '700',
    color: Colors.red70,
  },
  sheetHeader: {
    paddingVertical: 24,
  },
  sheetTitle: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#bcbdd9',
  },
  sheetText: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    color: '#000000',
    marginTop: 12,
  },
  sheetBody: {
    padding: 24,
  },
  sheetBodyOptions: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    //marginBottom: 10,
   // marginHorizontal: -16,
  },
  sheetBodyOption: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
    borderRadius: 12,
    marginHorizontal: 16,
    paddingVertical: 28,
  },
  sheetBodyOptionText: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 12,
    color: '#bcbdd9',
  },
  delimiter: {
    height: '100%',
    width: 1,
    backgroundColor: '#ebebf5',
  },
  btnSheet: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    padding: 14,
    borderWidth: 1,
    borderColor: '#000000',
    marginBottom: 12,
    backgroundColor: '#000000',
  },
  btnTextSheet: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  containerSheet: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  sheet: {
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
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
    height: 70,
    width: sizes.width * 0.9,
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    marginBottom: 20,
    alignItSelf: "center",
    
  },
  inputControl2: {
    height: 70,
    //width: sizes.width * 0.9,
    zIndex: 1,
    backgroundColor: COLORS.black,
    marginLeft: -62,
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    marginBottom: 20,
    alignItSelf: "center",
    
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
});