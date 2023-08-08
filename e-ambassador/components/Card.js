import React from 'react';
import {Image, View, StyleSheet, TouchableOpacity, Text, Platform} from 'react-native';
import {colors, shadow, sizes, spacing} from '../constants/Theme';
import Icon from './Icon';
import Font from '../constants/Font';


const CARD_WIDTH = sizes.width / 2 - (spacing.l + spacing.l / 2);
const CARD_HEIGHT = 200;

const Card = ({list}) => {
  return (
    <View style={styles.container}>
      {list.map((item, index) => {
        return (
          <TouchableOpacity style={styles.cardContainer} key={index}>
            <View style={[styles.card, shadow.light]} key={item.id}>
              {/* <View style={styles.imageBox}>
                <Image style={styles.image} source={item.image} />
              </View> */}
              <View style={styles.footer}>
                <View style={styles.titleBox}>
                  {/* <Icon icon="Notification" onPress={() => {}} /> */}
                  <Text style={styles.total}>{item.total}</Text>
                  <Text style={styles.title}>{item.title}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5
  },
  cardContainer: {
    marginLeft: spacing.l,
    marginBottom: spacing.l,
  },
  card: {
    width: CARD_WIDTH,
   // height: Platform.OS == "ios" ? CARD_HEIGHT - 60 : CARD_HEIGHT - 20,
    height: Platform.OS == "ios" ? CARD_HEIGHT - 60 : CARD_HEIGHT - 20,
    backgroundColor: colors.cardColor,
    borderRadius: sizes.radius,
    justifyContent: "center",
    //elevation: 1,
    ...shadow.dark
  },
  imageBox: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT - 60,
    borderTopLeftRadius: sizes.radius,
    borderTopRightRadius: sizes.radius,
    overflow: 'hidden',
  },
  image: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT - 60,
    resizeMode: 'cover',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
  },
  titleBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  total: {
    //marginVertical: 4,
    //fontSize: Platform.OS == "ios" ? sizes.h2 : sizes.h1,
    fontSize: sizes.h1,
    fontFamily: Font["rubik-bold"],
    color: colors.assetsColor,
    alignSelf: "center",
  },
  title: {
    justifyContent: "flex-end",
    fontSize: sizes.h3,
    color: colors.textColor,
    fontFamily: Font["rubik-light"],
  },
});

export default Card;