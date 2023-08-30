import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, shadow, sizes, spacing } from '../constants/Theme';
import BalanceAccount from '../components/BalanceAccount';
import Font from '../constants/Font';
import Button from '../components/Button';
import TransactionHistory from '../components/TransactionHistory';

const PortefeuilleScreen = () => {
 function renderHeader() {
  return (
    <View style={{
      width: "100%",
      height: 300,
      ...shadow.shadow,
    }}>
      <ImageBackground
        source={require('../assets/images/HeaderBackground.jpg')}
        resizeMode='cover'
        style={{
          alignItems: "center",
        }}
      >
      {/* Balance  */}
      <View 
          style={{
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: spacing.l,
            paddingVertical: spacing.l * 4,
           
          }}>
            <Text style={{ color: colors.backgroundColor, fontFamily: Font["figtree-bold"], fontSize: sizes.h5}}>Mon compte E-ambassador</Text>
            <Text style={{ fontFamily: Font["figtree-bold"], fontSize: sizes.balanceTitle, color: colors.backgroundColor}}>1,500.66 EA</Text>
        </View>
       {/* Bouton Retrait */}
        <View
          style={{
            position: "absolute",
            bottom: "5%",
            width: "30%",
            justifyContent: "center"
          }}
        >
        <TouchableOpacity
              style={{
                padding: 10,
                backgroundColor: colors.backgroundColor,
                marginVertical: spacing.s ,
                borderRadius: spacing.s,
                shadowColor: colors.accentColor,
                shadowOffset: {
                  width: 0,
                  height: spacing.s,
                },
                shadowOpacity: 0.3,
                shadowRadius: spacing.s
              }}
            >
              <Text
                style={{
                  fontFamily: Font["figtree-bold"],
                  color: colors.assetsColor,
                  textAlign: "center",
                  fontSize: sizes.h3,
                }}
              >
                Retrait
              </Text>
            </TouchableOpacity>
        </View>
       {/* Historique transactions */}
      </ImageBackground>
     
    </View>
  )
 }

 function renderTransactionHistory() {
  return (
    <TransactionHistory
      customerContainerStyle={{...shadow.shadow}}
      history={TransactionHistory}
    />
  )
 }

  return (
    <ScrollView>
        <View style={styles.container}>
          {renderHeader()}
          {renderTransactionHistory()}
        </View>
    </ScrollView>
  )
}

export default PortefeuilleScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  }
})