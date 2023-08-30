import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, sizes, spacing } from '../constants/Theme'
import Font from '../constants/Font'
import { transactionHistory } from '../data'

const TransactionHistory = ({customerContainerStyle, history}) => {

  const renderItem = ({item}) => {
    <TouchableOpacity
        style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: spacing.l
        }}
        
    >
    <Image 
        source={require('../assets/icons/Collapse.png')}
        style={{
            width: 30,
            height: 30,
            tintColor: colors.accentColor
        }}
        />
        <View style={{
            flex: 1,
            marginLeft: 12,
        }}>
            <Text style={{ fontFamily: Font['figtree-light'], fontSize: sizes.h3 }}> {item.description} </Text>
            <Text style={{ color: colors.assetSecondColor}}> {item.date} </Text>
        </View>
    </TouchableOpacity>
  }  

  return (
    <View
        style={{
            borderRadius: 12,
            backgroundColor: colors.backgroundColor,
            ...customerContainerStyle
        }}
    >
      <Text style={{ fontFamily: Font['figtree-bold'], fontSize: sizes.h3}}>Historiques de transactions</Text>
      <FlatList
        contentContainerStyle={{ marginTop: 12 }}
        scrollEnabled={false}
        data={transactionHistory}
        renderItem={renderItem}
        keyExtractor={item => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => {
            return (
                <View style={{ width: "100%", height: 1, backgroundColor: colors.assetSecondColor }}></View>
            )
        }}
       />
    </View>
  )
}

export default TransactionHistory

const styles = StyleSheet.create({})