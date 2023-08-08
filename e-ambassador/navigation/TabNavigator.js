import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from "../components/Icon";
import ProfileScreen from "../screens/ProfileScreen";
import HistoriqueScreen from "../screens/HistoriqueScreen";
import HomeScreen from "../screens/HomeScreen";
import Colors from "../constants/Colors";
import { colors, sizes } from "../constants/Theme";
import { Animated, StyleSheet } from "react-native";
import SettingScreen from "../screens/SettingScreen";
import { BlurView } from "expo-blur";


const tabs = [
    {
      name: 'Home',
      screen: HomeScreen,
    },
    {
      name: 'Historiques',
      screen: HistoriqueScreen,
    },
    {
      name: 'Profile',
      screen: ProfileScreen,
    },
    {
      name: 'Search',
      screen: SettingScreen,
    },
  ];

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    const offsetAnimation = React.useRef(new Animated.Value(0)).current;
    return (
    <>
        <Tab.Navigator initialRouteName="Home" 
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false, 
            headerShadowVisible: true,
            tabBarStyle: {
              backgroundColor: colors.backgroundColor,
              borderTopWidth: 0,
            }
        }}
        
        >
        { tabs.map(({ name, screen }, index) =>  
            {
            return  (
                <Tab.Screen key={name} name={name} component={screen}
                    options={{
                        tabBarIcon: ({focused}) => {
                            return  <Icon icon={name} size={40} style={{
                                tintColor: focused ? colors.titleItemColor : colors.gray
                            }} 
                        
                            />;
                        },
                        
                    }} 
                    listeners={{
                        focus: () => {
                            Animated.spring(offsetAnimation, {
                                toValue: index * (sizes.width / tabs.length),
                                useNativeDriver: true
                            }).start()
                        }
                    }}
                    
                /> 
                )
                
            })
        }
        </Tab.Navigator>
        <Animated.View
        style={[
          styles.indicator,
          {
            transform: [
              {
                translateX: offsetAnimation,
              },
            ],
          },
        ]}
      />
    </>
    )
}

export default TabNavigator;

const styles = StyleSheet.create({
  indicator: {
    position: 'absolute',
    width: 10,
    height: 2,
    left: sizes.width / tabs.length / 2 - 5,
    bottom: 5,
    backgroundColor: Colors.active,
    zIndex: 100,
  },
});
