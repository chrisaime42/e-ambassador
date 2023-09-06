import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
  Platform,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { sizes } from '../constants/Theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import RBSheet from 'react-native-raw-bottom-sheet';

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
const CustomersScreen = ({navigation}) => {
  const [selected, setSelected] = React.useState(0);


  
  const sheet = React.useRef();

  function saveCustomers () {
   return sheet.current.open();
     
  }

  const insets = useSafeAreaInsets()

  return (
    <SafeAreaView style={{ backgroundColor: '#fff', marginBottom: sizes.height * 0.2 }}>
      <View style={{ paddingHorizontal: sizes.width * 0.03, marginTop: insets.top, flexDirection: 'row', justifyContent: "space-between", alignItems: "center" }}>
        <Text style={styles.title}>Clients</Text>
        <TouchableOpacity
            onPress={() => saveCustomers()}
        >
            <View style={styles.headerNotificationsH}>
              <FontAwesome color="#222" name="user-plus" solid={true} size={20} />
            </View>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
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
      </ScrollView>
      <RBSheet
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{ container: styles.sheetS }}
        height={ Platform.OS == "android" ? sizes.height / 2 : 300}
        openDuration={250}
        ref={sheet}>
        <View style={styles.sheetHeaderS}>
          <Text style={styles.sheetTitleS}>entité du client</Text>
          {/* <Text style={styles.sheetTextS}>
            Veuillez à bien{'\n'} renseigner, les informations
          </Text> */}
        </View>
        <View style={styles.sheetBodyS}>
          <View style={styles.sheetBodyOptionsS}>
            <TouchableOpacity
              style={[
                styles.sheetBodyOptionS,
                selected === 0 && { borderColor: '#000' },
              ]}
              onPress={() => setSelected(0)}>
              <FeatherIcon
                name="home"
                color={selected === 0 ? '#000' : '#bcbdd9'}
                size={24}
              />
              <Text
                style={[
                  styles.sheetBodyOptionTextS,
                  selected === 0 && { color: '#000' },
                ]}>
                Entreprise
              </Text>
            </TouchableOpacity>
            <View style={styles.delimiterS} />
            <TouchableOpacity
              style={[
                styles.sheetBodyOptionS,
                selected === 1 && { borderColor: '#000' },
                
              ]}
              onPress={() => setSelected(1)}>
              <FeatherIcon
                name="user"
                color={selected === 1 ? '#000' : '#bcbdd9'}
                size={24}
              />
              <Text
                style={[
                  styles.sheetBodyOptionTextS,
                  selected === 1 && { color: '#000' },
                ]}>
                Particulier
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.btnS}>
            <Text style={styles.btnTextS}>Continuer</Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
    </SafeAreaView>
  )
}

export default CustomersScreen

const styles = StyleSheet.create({
  headerNotificationsH: {
    width: 48,
    height: 48,
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: '#e1e1e1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 12,
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
  sheetHeaderS: {
    paddingVertical: 24,
  },
  sheetTitleS: {
    fontSize: 16,
    top: -15,
    fontWeight: '700',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#bcbdd9',
  },
  sheetTextS: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    color: '#000000',
    marginTop: 12,
  },
  sheetBodyS: {
    padding: 24,
    top: - 20
  },
  sheetBodyOptionsS: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: sizes.height * 0.1,
    marginHorizontal: -16,
  },
  sheetBodyOptionS: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
    borderRadius: 12,
    marginHorizontal: 16,
    paddingVertical: sizes.height * 0.05,
  },
  sheetBodyOptionTextS: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 12,
    color: '#bcbdd9',
  },
  delimiterS: {
    height: '100%',
    width: 1,
    backgroundColor: '#ebebf5',
  },
  btnS: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    padding: 14,
    borderWidth: 1,
    borderColor: '#000000',
    marginBottom: 12,
    backgroundColor: '#000000',
    top: Platform.OS == "ios" ? -30 : 0
  },
  btnTextS: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  containerS: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  sheetS: {
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  placeholderS: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    height: 400,
    marginTop: 0,
    padding: 24,
  },
  placeholderInsetS: {
    borderWidth: 4,
    borderColor: '#e5e7eb',
    borderStyle: 'dashed',
    borderRadius: 9,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
});