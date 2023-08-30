import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { sizes, spacing } from '../constants/Theme'
import { Ionicons } from '@expo/vector-icons'

const HeaderBar = ({navigation, right, onPress}) => {
  return (
    <View style={{ paddingHorizontal: spacing.l, paddingVertical: spacing.l, flexDirection: "row" }}>
      <View style={{ flex: 1, alignItems: "flex-start" }}>
        <TouchableOpacity
            style={{
                flexDirection: "row",
                alignItems: "center",
            }}
            onPress={onPress}
        >
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text style={{ marginLeft: 2}}> Back</Text>
        </TouchableOpacity>
      </View>
     { right && 
     <View style={{ flex: 1, alignItems: "flex-end"}}>
        <TouchableOpacity>
            <Ionicons name="notifications-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>}
    </View>
  )
}

export default HeaderBar

const styles = StyleSheet.create({})