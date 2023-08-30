import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { sizes, spacing } from '../constants/Theme';
import Font from '../constants/Font';

const BalanceAccount = ({title, balance}) => {
  return (
    <SafeAreaView style={[styles.container]}>
     <View>
      <Text style={styles.title}>{title}</Text>
      <Text  style={styles.balance}>{balance} EA </Text>
     </View>
     
    </SafeAreaView>
  )
}

export default BalanceAccount;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start",
    paddingHorizontal: spacing.l,
  },
  title: {
    fontFamily: Font["figtree-regular"],
  },
  balance: {
    fontFamily: Font["figtree-regular"],
    fontSize: Platform.OS == "ios" ? sizes.balanceTitle : sizes.title,
  }
})