import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors, shadow, sizes, spacing } from '../constants/Theme'
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Font from '../constants/Font';

const CARD_WIDTH = sizes.width / 2 - (spacing.l + spacing.l / 2);
const CARD_HEIGHT = 150;

const StatisticsCard = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.cardContainer}> 
          <TouchableOpacity onPress={() => console.log('Clients enregistrés')}>
          <View style={[styles.statisticCard]}>
               <View style={styles.columnStats}>
               <View style={styles.header}>
                    <Ionicons name="arrow-up-circle-sharp" size={30} color={colors.secondCardColor} />
                    </View>
                    <View style={{alignSelf: "flex-start"}}><Text style={{color: colors.secondCardColor, fontFamily: Font['figtree-bold'], fontSize: sizes.title, paddingHorizontal: spacing.s}}>100</Text></View>
                    <View style={{ alignSelf: "flex-start", paddingHorizontal: spacing.s }}><Text style={{ color: colors.textColor, paddingHorizontal: spacing.s }}>Enregistrés</Text></View>
               </View>
            </View>
          </TouchableOpacity>
           
            <TouchableOpacity onPress={() => console.log('Clients signés')}>
            <View style={[styles.statisticCardRight]}>
                <View style={styles.columnStats}>
                    <View style={styles.header}>
                    <Ionicons name="arrow-up-circle-sharp" size={30} color={colors.mainColor} />
                    </View>
                    <View style={styles.body}><Text style={styles.total}>100</Text></View>
                    <View style={styles.footer}><Text style={styles.totalText}>Clients signés</Text></View>
                </View>
            </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => console.log('Clients relancés')}>
            <View style={[styles.statisticCardRightBottom]}>
                <View style={styles.columnStats}>
                    <View style={styles.header}>
                    <Ionicons name="refresh-circle-sharp" size={30} color={colors.mainColor} />
                    </View>
                    <View style={styles.body}><Text style={styles.total}>51</Text></View>
                    <View style={styles.footer}><Text style={styles.totalText}>Clients relancés</Text></View>
                </View>
            </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => console.log('Clients revoqués')}>
              <View style={[styles.statisticCardRightBottom]}>
                  <View style={styles.columnStats}>
                      <View style={styles.header}>
                      <Ionicons name="remove-circle-sharp" size={30} color={colors.mainColor} />
                      </View>
                      <View style={styles.body}><Text style={styles.total}>0</Text></View>
                      <View style={styles.footer}><Text style={styles.totalText}>Clients revoqués</Text></View>
                  </View>
              </View>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default StatisticsCard

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS == "ios" ? - 15 : -50
      },
      cardContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginHorizontal: spacing.l,
        marginVertical: spacing.l,
      },
      statisticCard: {
        backgroundColor: colors.mainColor,
        borderRadius: 27,
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
      },
      statisticCardRight: {
        backgroundColor: colors.secondCardColor,
        borderRadius: 27,
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
      },
      statisticCardRightBottom: {
        backgroundColor: colors.secondCardColor,
        borderRadius: 27,
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        marginTop:10
      },
      columnStats: {
        flexDirection: "column",
      },
      body: {
        alignSelf: "center",
        paddingHorizontal: spacing.s
      },
      header: {
        flexDirection: "row",
        justifyContent: "flex-end",
       // marginVertical: spacing.l
       right: 5,
       top: 5
      },
      footer: {
        alignSelf: "center",
        paddingHorizontal: spacing.s
      },
      titleColor: {
        color: colors.mainColor,
      },
      total: {
        color: colors.mainColor,
        fontFamily: Font["figtree-medium"],
        fontSize: sizes.title
      },
      totalText: {
        fontFamily: Font["figtree-medium"],
        paddingHorizontal: spacing.s,
        fontSize: Platform.OS == "ios" ? 12 : 15
      }
})