import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {colors, shadow, sizes, spacing} from '../constants/Theme';
import WelcomeHeader from '../components/WelcomeHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import BalanceAccount from '../components/BalanceAccount';
import MainHeader from '../components/MainHeader';
import StatisticsCard from '../components/StatisticsCard';

const HomeScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} >
      <SafeAreaView style={styles.container}>
        <MainHeader />
        <BalanceAccount 
          title={"Mon compte E-ambassador"}
          balance={"1,500.66"}
         />
         <StatisticsCard ti />
      </SafeAreaView>    
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  btn: {
    position: "absolute",
    borderRadius: sizes.radius30,
    right: 20,
    bottom: 20,
    height: 50,
    width: 50,
    backgroundColor: colors.assetsColor,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
   ...shadow.light
    
  },
  btnText: {
      color: colors.white
  },
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
});

export default HomeScreen;