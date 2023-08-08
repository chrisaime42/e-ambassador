import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {colors, sizes, spacing} from '../constants/Theme';
import Font from '../constants/Font';

const ScreenHeader = ({mainTitle, secondTitle}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>{mainTitle}</Text>
      <Text style={styles.secondTitle}>{secondTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.l,
    paddingVertical: spacing.l,
  },
  mainTitle: {
    fontSize: sizes.h1,
    fontWeight: '700',
    color: colors.textColor,
    fontFamily: Font['rubik-medium'],
  },
  secondTitle: {
    fontSize: sizes.h3,
    color: colors.textColor,
    top: -5
  },
});

export default ScreenHeader;