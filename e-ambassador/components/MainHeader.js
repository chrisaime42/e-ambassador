import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from './Icon';
import {colors, sizes, spacing} from '../constants/Theme';

const MainHeader = ({title}) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, {marginTop: insets.top}]}>
      <Icon icon="Hamburger" style={{color: "white"}} onPress={() => {}} />
      <Text style={styles.title}>{title}</Text>
      <Icon icon="Notification" onPress={() => {}} />
    </View>
  );
};

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
});

export default MainHeader;