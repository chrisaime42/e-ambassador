import React, { useEffect } from 'react';
import {StyleSheet, ScrollView, StatusBar, Text, View, FlatList, TouchableOpacity, LogBox} from 'react-native';
import {colors, shadow, sizes, spacing} from '../constants/Theme';
import WelcomeHeader from '../components/WelcomeHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import BalanceAccount from '../components/BalanceAccount';
import MainHeader from '../components/MainHeader';
import StatisticsCard from '../components/StatisticsCard';
import CustomersStatus from '../components/CustomersStatus';
import Font from '../constants/Font';
import { statusCustomers } from '../data';


const HomeScreen = ({navigation}) => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested'])
  }, [])
  function renderStats() {
   return (
    <View>
        <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }} > 
          <Text style={{ paddingHorizontal: spacing.l, fontFamily: Font["figtree-bold"], fontSize: sizes.h2, marginBottom: spacing.s}}>Clients</Text>
        </View>
        <FlatList 
          data={statusCustomers}
          //horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={ item => `${item.id}`}
          renderItem={({item, index }) => {
          return <CustomersStatus key={item.id} name={item.name} type={item.type} Status={item.status} />
          }}
        />
    </View>
   ) 
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false} >
      <SafeAreaView style={styles.container}>
        <MainHeader />
        {/* <BalanceAccount 
          title={"Mon compte E-ambassador"}
          balance={"1,500.66"}
         /> */}
         <StatisticsCard />
       {renderStats()}
      </SafeAreaView>    
      <StatusBar barStyle='dark-content' />
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
  containerAddCustomers: {
    paddingHorizontal: spacing.l,
    position: "absolute",
    top: 450,
    right: 0,
    backgroundColor: colors.accentColor,
    height: 50,
    width: 50
  }
});

export default HomeScreen;