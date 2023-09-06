import React, { useEffect } from 'react';
import {StyleSheet, ScrollView, StatusBar, Text, View, FlatList, TouchableOpacity, LogBox, Image} from 'react-native';
import {colors, shadow, sizes, spacing} from '../constants/Theme';
import WelcomeHeader from '../components/WelcomeHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import BalanceAccount from '../components/BalanceAccount';
import MainHeader from '../components/MainHeader';
import StatisticsCard from '../components/StatisticsCard';
import CustomersStatus from '../components/CustomersStatus';
import Font from '../constants/Font';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { statusCustomers } from '../data';

const lessons = [
  {
    img: 'https://images.unsplash.com/photo-1536922246289-88c42f957773?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2404&q=80',
    name: 'Icebrain',
    cal: 22,
    status: "en attente",
  },
  {
    img: 'https://images.unsplash.com/photo-1597347316205-36f6c451902a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    name: 'Pull-up',
    cal: 12,
    status: "en attente",
  },
  {
    img: 'https://images.unsplash.com/photo-1616803689943-5601631c7fec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    name: 'Icebrain',
    cal: 12,
    status: "en attente",
  },
  {
    img: 'https://images.unsplash.com/photo-1598266663439-2056e6900339?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80',
    name: 'Icebrain',
    cal: 33,
    status: "en attente",
  },
  {
    img: 'https://images.unsplash.com/photo-1632167764165-74a3d686e9f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80',
    name: 'Icebrain',
    cal: 44,
    status: "en attente",
  },
  {
    img: 'https://images.unsplash.com/photo-1536922246289-88c42f957773?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2404&q=80',
    name: 'Icebrain',
    cal: 22,
    status: "en attente",
  },
  {
    img: 'https://images.unsplash.com/photo-1597347316205-36f6c451902a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    name: 'Icebrain',
    cal: 12,
    status: "en attente",
  },
  {
    img: 'https://images.unsplash.com/photo-1616803689943-5601631c7fec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    name: 'Icebrain',
    cal: 12,
    status: "en attente",
  },
  {
    img: 'https://images.unsplash.com/photo-1598266663439-2056e6900339?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80',
    name: 'Icebrain',
    cal: 33,
    status: "en attente",
  },
  {
    img: 'https://images.unsplash.com/photo-1632167764165-74a3d686e9f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80',
    name: 'Icebrain',
    cal: 44,
    status: "en attente",
  },
];
const HomeScreen = ({navigation}) => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested'])
  }, [])

  function renderHeader() {
    return (
      <View style={styles.headerH}>
          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}>
            <View style={styles.headerProfileH}>
              <Image
                alt=""
                source={{
                  uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
                }}
                style={styles.avatarH}
              />

              <View style={styles.headerProfileBodyH}>
                <Text style={styles.headerTitleH}>Hi, Hertz Joel</Text>

                <Text style={styles.headerHandleH}>Bon retour !</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}>
            <View style={styles.headerNotificationsH}>
              <FontAwesome color="#222" name="bell" solid={true} size={20} />
            </View>
          </TouchableOpacity>
    </View>
    )
  }
  function renderStats() {
   return (
    <View>
        <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }} > 
          <Text style={{ paddingHorizontal: spacing.l, fontFamily: Font["figtree-bold"], fontSize: sizes.h2, marginBottom: spacing.s}}>Clients</Text>
        </View>
        <FlatList 
          data={statusCustomers}
          //horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={ item => `${item.id}`}
          renderItem={({item, index }) => {
          return <CustomersStatus key={item.id} name={item.name} type={item.type} Status={item.status} />
          }}
        />
    </View>
   ) 
  }
  return (
    
      <SafeAreaView style={styles.container}>
        {renderHeader()}
        <ScrollView showsVerticalScrollIndicator={false} >
          {/* <BalanceAccount 
          title={"Mon compte E-ambassador"}
          balance={"1,500.66"}
         /> */}
         <StatisticsCard />
         
         <View style={{ padding: 24}}>
         <Text style={[styles.title, { marginTop: - 20}]}>
          Clients
         </Text>
         {lessons.map(({ name, cal, status, img }, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  // handle onPress
                }}>
                <View style={styles.card}>
                  <Image
                    alt=""
                    resizeMode="cover"
                    style={styles.cardImg}
                    source={{ uri: img }}
                  />

                  <View>
                    <Text style={styles.cardTitle}>{name}</Text>

                    <View style={styles.cardStats}>
                      <View style={styles.cardStatsItem}>
                        <FeatherIcon color="#636a73" name="clock" />

                        <Text style={styles.cardStatsItemText}>
                          {status} 
                        </Text>
                      </View>

                      {/* <View style={styles.cardStatsItem}>
                        <FeatherIcon color="#636a73" name="zap" />
                        <Text style={styles.cardStatsItemText}>{cal} cals</Text>
                      </View> */}
                    </View>
                  </View>

                  <View style={styles.cardAction}>
                    <FeatherIcon color="#9ca3af" name="chevron-right" size={22} />
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
         </View>
    
        </ScrollView>
       <StatusBar barStyle='dark-content' />
      </SafeAreaView>    
  );
};

const styles = StyleSheet.create({
  btn: {
    position: "absolute",
    borderRadius: sizes.radius30,
    right: 20,
    bottom: 20,
    height: 50,
    width: 50,
    backgroundColor: colors.assetsColor,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
   ...shadow.light
    
  },
  btnText: {
      color: colors.white
  },
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    marginBottom: 70
  },
  containerAddCustomers: {
    paddingHorizontal: spacing.l,
    position: "absolute",
    top: 450,
    right: 0,
    backgroundColor: colors.accentColor,
    height: 50,
    width: 50
  },

  // header
  containerH: {
    padding: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  headerH: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
    paddingHorizontal: sizes.width * 0.05,
  },
  headerProfileH: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerProfileBodyH: {
    marginLeft: 12,
  },
  headerTitleH: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 3,
  },
  headerHandleH: {
    fontSize: sizes.width * 0.04,
    lineHeight: 20,
    fontWeight: '500',
    color: '#616d79',
  },
  headerNotificationsH: {
    width: 48,
    height: 48,
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: '#e1e1e1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderH: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    height: 400,
    marginTop: 0,
    padding: 0,
  },
  placeholderInsetH: {
    borderWidth: 4,
    borderColor: '#e5e7eb',
    borderStyle: 'dashed',
    borderRadius: 9,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  avatarH: {
    width: 48,
    height: 48,
    borderRadius: 9999,
  },
  card: {
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  cardImg: {
    width: 50,
    height: 50,
    borderRadius: 9999,
    marginRight: 12,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },
  cardStats: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardStatsItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },
  cardStatsItemText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#636a73',
    marginLeft: 2,
  },
  cardAction: {
    marginLeft: 'auto',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 12,
  },
});

export default HomeScreen;