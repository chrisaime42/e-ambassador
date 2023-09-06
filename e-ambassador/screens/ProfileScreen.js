import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Switch,
  SafeAreaView,
  Image,
  ScrollView,
  Platform,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Profile from "../assets/images/man.png";
import { COLORS, sizes } from '../constants/Theme';

const SECTIONS = [
  {
    header: 'Application',
    items: [
      { icon: 'globe', label: 'Modifier mes informations', type: 'link' },
      { icon: 'moon', label: 'Changer le numéro', type: 'link' },
      { icon: 'wifi', label: 'Reinitialiser le mot de passe', type: 'link' },
    ],
  },
  {
    header: 'Portefeuille',
    items: [
      { icon: 'globe', label: 'Mon solde', type: 'link' },
      { icon: 'moon', label: 'Retrait', type: 'link' },
      { icon: 'wifi', label: 'Transaction', type: 'link' },
    ],
  },
  {
    header: 'Support',
    items: [
      { icon: 'mail', label: 'Contactez-nous', type: 'link' },
      { icon: 'flag', label: 'Signaler un bug', type: 'link' },
      { icon: 'save', label: 'Partager avec vos amis', type: 'link' },
      { icon: 'save', label: 'Données personnelles', type: 'link' },
      { icon: 'save', label: 'Conditions et utilisations', type: 'link' },
      { icon: 'download', label: 'Licences', type: 'link' },
    ],
  },

 
];

const ProfileScreen = ({ navigation }) => {
  
  const insets = useSafeAreaInsets();
  function SectionRow({ label, value, type, index, onPress }) {
    return (
      <View style={[{ marginLeft: 12 }, index !== 0 && styles.splitline]}>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.sectionBodyRow}>
            <Text style={styles.sectionBodyRowLabel}>{label}</Text>
            <View style={styles.spacer} />
            {type === 'input' && (
              <Text style={styles.sectionBodyRowValue}>{value}</Text>
            )}
            {type === 'boolean' && <Switch value={value} />}
            {(type === 'input' || type === 'link') && (
              <FeatherIcon
                style={{ marginLeft: 6 }}
                name="chevron-right"
                size={24}
                color="#ababab"
              />
            )}
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  // function renderProfileHeader() {
  //   return (
  //       <View style={[styles.container,{ marginTop: insets.top}]}>
  //         <View>
  //           <Text style={styles.titleHeader}>Joel Hertz</Text>
  //           <Text style={styles.subTitleHeader}>joelhertz@gmail.com</Text>
  //         </View>
  //         {/* Mon compte */}
  //         <View style={styles.containerCard}>
  //           <Text style={styles.cardTitle}>Mon compte</Text>
  //             <View style={styles.contentProfile}>
  //               <TouchableOpacity style={styles.cardContent}>
  //               <Ionicons name="pencil-outline" size={24} color="black" />
  //                 <Text style={styles.contentTitle}>Modifier mes informations</Text>
  //               </TouchableOpacity>
  //               <TouchableOpacity style={styles.cardContent}>
  //                <Ionicons name="lock-closed-outline" size={24} color="black" />
  //                 <Text style={styles.contentTitle}>Changer le mot de passe</Text>
  //               </TouchableOpacity>
  //               <TouchableOpacity style={styles.cardContent}>
  //               <Ionicons name="call-outline" size={24} color="black" />

  //                 <Text style={styles.contentTitle}>Changer le numero de téléphone</Text>
  //               </TouchableOpacity>
  //           </View>
  //         </View>
  //         {/* Application */}
  //         {/* <View style={styles.containerCard}>
  //           <Text style={styles.cardTitle}>Application</Text>
  //             <View style={styles.contentProfile}>
  //               <TouchableOpacity style={styles.cardContent}>
  //                 <Ionicons name="card-outline" size={24} color="black" />
  //                 <Text style={styles.contentTitle}>Gérer mon portefeuille</Text>
  //               </TouchableOpacity>
  //               <TouchableOpacity style={styles.cardContent}>
  //               <Ionicons name="card-outline" size={24} color="black" />
  //                 <Text style={styles.contentTitle}>Mon solde</Text>
  //               </TouchableOpacity>
  //               <TouchableOpacity style={styles.cardContent}>
  //               <Ionicons name="card-outline" size={24} color="black" />
  //                 <Text style={styles.contentTitle}>Faire un retrait</Text>
  //               </TouchableOpacity>
  //             </View>
              
  //         </View> */}
  //         {/* Support */}
  //         <View style={styles.containerCard}>
  //           <Text style={styles.cardTitle}>Support</Text>
  //             <View style={styles.contentProfile}>
  //               <TouchableOpacity style={styles.cardContent}>
  //               <Ionicons name="heart-outline" size={24} color="black" />
  //                 <Text style={styles.contentTitle}>Aidez-nous à ameliorer E-ambassador</Text>
  //               </TouchableOpacity>
  //               <TouchableOpacity style={styles.cardContent}>
  //               <MaterialCommunityIcons name="email-outline" size={24} color="black" />
  //                 <Text style={styles.contentTitle}>Nous contacter</Text>
  //               </TouchableOpacity>
  //               <TouchableOpacity style={styles.cardContent}>
  //               <Ionicons name="shield-checkmark-outline" size={24} color="black" />
  //                 <Text style={styles.contentTitle}>Données personnelles</Text>
  //               </TouchableOpacity>
  //               <TouchableOpacity style={styles.cardContent}>
  //               <MaterialCommunityIcons name="shield-lock-open-outline" size={24} color="black" />
  //                 <Text style={styles.contentTitle}>Politiques de confidentialités</Text>
  //               </TouchableOpacity>
  //               <TouchableOpacity style={styles.cardContent}>
  //               <MaterialCommunityIcons name="chat-question-outline" size={24} color="black" />
  //                 <Text style={styles.contentTitle}>FAQ</Text>
  //               </TouchableOpacity>
  //               <TouchableOpacity style={styles.cardContent}>
  //               <AntDesign name="exclamationcircleo" size={20} color="black" />
  //                 <Text style={styles.contentTitle}>Crédits</Text>
  //               </TouchableOpacity>
  //               <TouchableOpacity style={styles.cardContent}>
  //               <Ionicons name="log-out-outline" size={24} color="black" />
  //                 <Text style={styles.contentTitle}>Deconnexion</Text>
  //               </TouchableOpacity>
  //           </View>
  //         </View>
  //       </View>
  //   )
  // }
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.header, { marginTop: Platform.OS == "android" && insets.top}]}>
        <Text style={styles.title}  >Mon compte</Text>
      </View>
      <ScrollView contentContainerStyle={{ paddingVertical: 24 }}
        showsVerticalScrollIndicator={false}
        >
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>Profile</Text>
      </View>
      <View style={styles.profile}>
        <Image
          alt=""
          source={Profile}
          style={styles.profileAvatar}
        />

        <View style={styles.profileBody}>
          <Text style={styles.profileName}>Hertz Joel</Text>

          <Text style={styles.profileHandle}>hertz.joel@mail.com</Text>
        </View>
      </View>
    </View>

    {SECTIONS.map(({ header, items }) => (
      <View style={styles.section} key={header}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>{header}</Text>
        </View>
        <View style={styles.sectionBody}>
          {items.map(({ label, type, value }, index) => {
            const isFirst = index === 0;
            const isLast = index === items.length - 1;
            return (
              <View
                key={index}
                style={[
                  styles.rowWrapper,
                  index === 0 && { borderTopWidth: 0 },
                  isFirst && styles.rowFirst,
                  isLast && styles.rowLast,
                ]}>
                <TouchableOpacity
                  onPress={() => {
                    // handle onPress
                  }}>
                  <View style={styles.row}>
                    <Text style={styles.rowLabel}>{label}</Text>

                    <View style={styles.rowSpacer} />

                    {type === 'input' && (
                      <Text style={styles.rowValue}>{value}</Text>
                    )}

                    {type === 'boolean' && <Switch value={value} />}

                    {(type === 'input' || type === 'link') && (
                      <FeatherIcon
                        color="#ababab"
                        name="chevron-right"
                        size={22}
                      />
                    )}
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </View>
    ))}
    <View style={[styles.section, { alignSelf: "flex-start", bottom: 20}]}>
    <View style={styles.sectionHeader}>
      <Text style={{ color: COLORS.gray }}>© 2023 Icebrain DIGITAL</Text>
    </View>
    </View>
    </ScrollView>
  </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8',
    flex: 1,
    marginBottom: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 10,
    paddingHorizontal: sizes.width * 0.06,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f1f1f',
  },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  sectionHeader: {
    padding: 8,
    paddingLeft: 12,
  },
  sectionHeaderText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#adadad',
    textTransform: 'uppercase',
  },
  sectionBody: {
    borderRadius: 12,
    shadowColor: 'rgba(0,0,0,0.25)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  profile: {
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  profileAvatar: {
    width: 60,
    height: 60,
    borderRadius: 9999,
    marginRight: 12,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#292929',
  },
  profileHandle: {
    marginTop: 2,
    fontSize: 16,
    fontWeight: '400',
    color: '#858585',
  },
  profileAction: {
    marginTop: 16,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007bff',
    borderRadius: 12,
  },
  profileActionText: {
    marginRight: 8,
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 12,
    paddingRight: 12,
    paddingBottom: 12,
    paddingLeft: 0,
  },
  rowFirst: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  rowLast: {
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  rowWrapper: {
    paddingLeft: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#f0f0f0',
  },
  rowLabel: {
    fontSize: 17,
    color: '#000',
  },
  rowValue: {
    fontSize: 17,
    color: '#ababab',
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
});