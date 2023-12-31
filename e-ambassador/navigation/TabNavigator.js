import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from "../components/Icon";
import ProfileScreen from "../screens/ProfileScreen";
import HistoriqueScreen from "../screens/HistoriqueScreen";
import HomeScreen from "../screens/HomeScreen";
import Colors from "../constants/Colors";
import { COLORS, colors, shadow, sizes } from "../constants/Theme";
import { Animated, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SettingScreen from "../screens/SettingScreen";
import Notification from "../screens/NotificationScreen";
import PortefeuilleScreen from "../screens/PortefeuilleScreen";
import Font from "../constants/Font";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import FeatherIcon from 'react-native-vector-icons/Feather';

import { LinearGradient } from "expo-linear-gradient";
import NotificationScreen from "../screens/NotificationScreen";
import CustomersScreen from "../screens/CustomersScreen";



const Tab = createBottomTabNavigator();
// const TabBarCustomButtom = ({children, onPress}) => {
//   return (
//       <TouchableOpacity
//         style={{
//           top: -25,
//           justifyContent: "center",
//           alignItems: "center",
//           ...styles.shadow
//         }}
//         onPress={onPress}
//       >
      
//        <LinearGradient 
//           colors={[colors.assetsColor, colors.assetsColor]}
//           style={{ width: 60, height: 60, borderRadius: 35}}
//         >
//         {children} 
//        </LinearGradient>
//     </TouchableOpacity>
//   )
// }


const TabNavigator = () => {
  // function Bottom() {
  //   return (
  //     <View><Text>Text</Text></View>
  //   )
  // }
    return (
    <>
        <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              elevation: 0,
              backgroundColor: colors.backgroundColor,
              borderTopColor: "transparent",
              //height: 100
            }
        }}
        >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{ alignItems: "center", justifyContent: "center"}}>
                 <FeatherIcon name="home" size={24} color={focused ? colors.assetsColor : COLORS.lightGray }
                 />
              </View>
            )
          }}
         />
        <Tab.Screen
          name="Customers"
          component={CustomersScreen}
          options={{
            tabBarIcon: ({ focused}) => (
              <View style={{ alignItems: "center", justifyContent: "center"}}>
                 <FeatherIcon name="users" size={24} color={focused ? colors.assetsColor : COLORS.lightGray }
                 />
              </View>
            )
          }}
         />  
        {/* <Tab.Screen
          name="Notifications"
          component={NotificationScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{ alignItems: "center", justifyContent: "center"}}>
                 <FeatherIcon name="bell" size={24} color={focused ? colors.assetsColor : COLORS.lightGray }
                 />
              </View>
            ),
            tabBarButton: (props) => (
              <TabBarCustomButtom
                {...props}
               />
            )
          }}
         />   */}
        {/* <Tab.Screen
          name="Transaction"
          component={PortefeuilleScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center"}}>
                <FeatherIcon name="trending-up" size={24} color={focused ? colors.assetsColor : COLORS.lightGray }
                 />
              </View>
            )
          }}
         /> */}
        <Tab.Screen
          name="Parametre"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused}) => (
              <View style={{ alignItems: "center", justifyContent: "center"}}>
                 <FeatherIcon name="settings" size={24} color={focused ? colors.assetsColor : COLORS.lightGray }
                 />
              </View>
            )
          }}
         />
        </Tab.Navigator>
    </>
    )
}

export default TabNavigator;

const styles = StyleSheet.create({
  indicator: {
    position: 'absolute',
    width: 10,
    height: 2,
    bottom: 5,
    backgroundColor: Colors.active,
    zIndex: 100,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 2
}
});
