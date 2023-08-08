import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity, Platform} from 'react-native';
import Icon from './Icon';
import {colors, sizes, spacing} from '../constants/Theme';
import Profile from "../assets/images/man.png";
import Font from '../constants/Font';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const MainHeader = ({title}) => {
 const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container,{marginTop: Platform.OS =="ios" ? 5 : 5}]}>
      <View style={styles.details}>
        <View style={styles.profileContainer}>
          <TouchableOpacity onPress={() => console.log("Profile")}>
            <Image source={Profile}
            style={styles.image} />
          </TouchableOpacity>
            <View style={styles.textProfileContainer}>
            <Text style={styles.titleProfile}>Hello Hertz,</Text>
            <Text style={styles.subTitleProfile}>Bon retour sur e-ambassador</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={24} color="black" />
        </TouchableOpacity>
     
    </View>
  
  );
};

 {/*  <View style={[styles.container, {marginTop: insets.top}]}>
      <Icon icon="Hamburger" style={{color: "white"}} onPress={() => {}} />
      <Text style={styles.title}>{title}</Text>
      <Icon icon="Notification" onPress={() => {}} />
    </View> */}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.l,
  },
  title: {
    fontSize: sizes.h3,
    fontWeight: 'bold',
    color: colors.titleItemColor,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  profileContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  textProfileContainer: {
    flexDirection: "column",
    marginHorizontal: 10,
    justifyContent: "center",
  },
  titleProfile: {
    color: colors.assets,
    letterSpacing: 3,
    fontFamily: Font['figtree-bold']
  },
  subTitleProfile:{
    color: colors.bodyColor,
    fontFamily: Font['figtree-light'],
    fontSize: Platform.OS == "ios" ? 12 : 15,
    letterSpacing: -.8,
  },
});


export default MainHeader;