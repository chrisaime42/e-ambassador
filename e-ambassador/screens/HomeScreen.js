import React from 'react';
import {View, StyleSheet, ScrollView, Text, Touchable, TouchableOpacity} from 'react-native';
import {colors, shadow, sizes, spacing} from '../constants/Theme';
import MainHeader from '../components/MainHeader';
import ScreenHeader from '../components/ScreenHeader';
import {STATS} from '../data/index';
import { AntDesign } from '@expo/vector-icons';

import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import FontSize from '../constants/FontSize';
import Font from '../constants/Font';
import WelcomeHeader from '../components/WelcomeHeader';

const HomeScreen = () => {
  return (
   
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false} >
     <WelcomeHeader />
        <Card
          list={STATS}
         />
         
    </ScrollView>
    <TouchableOpacity style={styles.btn}>
      <AntDesign name="plus" size={26} color="white" />
    </TouchableOpacity>
    </View>
    
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
    backgroundColor: "#364F6B",
  },
});

export default HomeScreen;