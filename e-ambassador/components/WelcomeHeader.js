import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainHeader from './MainHeader'
import ScreenHeader from './ScreenHeader'

const WelcomeHeader = () => {
  return (
    <View>
      <MainHeader />
      <ScreenHeader mainTitle={"Hi, Hertz"} secondTitle={"Bon retour !"} />
    </View>
  )
}

export default WelcomeHeader

const styles = StyleSheet.create({})