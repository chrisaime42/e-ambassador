import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, sizes, spacing } from '../constants/Theme';
import Font from '../constants/Font';
import { Ionicons } from '@expo/vector-icons';

const CustomersStatus = ({name, type, Status}) => {
 
  return (
    <View style={styles.container}>
      <TouchableOpacity>
      <View style={styles.customersContainer}>
        <View style={styles.customersCard}>
          <View style={styles.customersStatus}>
            <View style={{ alignSelf: "center"}}>
              { 
                  Status && Status == "en attente" ?
                  (<View style={styles.circleStatus}><Ionicons name="arrow-up-sharp" size={15} color={colors.wait} /></View>)
                  : Status == "signer" ? (<View style={styles.circleStatus}>
                    <Ionicons name="arrow-up-sharp" size={15} color={colors.alert} />
                  </View>)
                  : Status == "relancer" ? (<View style={styles.circleStatus}><Ionicons name="refresh-sharp" size={15} color={colors.accentColor} /></View>)
                  : (<View style={styles.circleStatus}><Ionicons name="arrow-down-sharp" size={15} color={colors.danger} /></View>)
                }
            </View>
            <View style={styles.customersView}>
              <Text style={styles.titleCustomers}> {name}</Text>
              <Text  style={styles.typeCustomers}> {type}</Text>
            </View>
          </View>
          <View style={styles.statusContainer}>
            <View style={[styles.status]}>
            <Text style={styles.statusText}> {Status}</Text>
            </View>
          </View>
        </View>
      </View>
      </TouchableOpacity>
    </View>
  )
}

export default CustomersStatus;

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: spacing.l,
      paddingVertical: spacing.l - 20,
    },
    title: {
      fontFamily: Font["figtree-regular"],
      paddingVertical: spacing.s,
    },
    customersContainer: {
      flex: 1,
      backgroundColor: colors.secondCardColor,
      height: 60,
      borderRadius: 10,
      justifyContent: "center",
      paddingHorizontal: 10
    },
    customersCard: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    status: {
      padding: 5,
      borderRadius: 5,
      backgroundColor: colors.mainColor
    },
    customersStatus: {
      flex: 1,
      justifyContent: "center",
      flexDirection: "row"
    },
    customersView: {
      flex: 1,
      justifyContent: "center",
    },
    titleCustomers: {
      color: colors.mainColor,
      fontFamily: Font["figtree-regular"],
      letterSpacing: 2
    },
    typeCustomers: {
      color: colors.bodyColor,
      fontFamily: Font["figtree-light"],
      textTransform: "capitalize"
    },
    statusContainer: {
      justifyContent: "center"
    },
    statusText: {
      fontFamily: Font["figtree-light"],
      fontSize: 10,
      color: colors.textColor,
      textTransform: "capitalize"

    },
    circleStatus: {
      backgroundColor: colors.assetSecondColor,
      alignItems: "center",
      justifyContent: "center",
      height: 24,
      width: 24,
      borderRadius: 50
    }
})