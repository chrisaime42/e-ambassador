import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import Swiper from "react-native-swiper";
const { height, width } = Dimensions.get("window");
import Customers from "../assets/images/11.jpeg";
import Customers1 from "../assets/images/22.jpeg";
import Customers2 from "../assets/images/33.jpeg";
import Customers3 from "../assets/images/44.jpeg";


const OnboardingScreen = ({ navigation : { navigate}}) => {
  return (
    
    // <View style={styles.container}>
    //   <StatusBar hidden={true} />
    //   <Swiper 
    //     autoplay={true} 
    //     autoplayTimeout={1000}
    //     bounces={false}
    //     alwaysBounceHorizontal={false}
    //     alwaysBounceVertical={false}
    //   >
    //     <View style ={ styles.slide}>
    //       <Image source={Customers1} style={styles.image} />
    //     </View>

    //   </Swiper>
    //   <View style={styles.textContainer}>
    //     <View style={styles.titleContainer}>
    //       <Text style={styles.title}>E-ambassador.</Text>
    //     </View>
    //     <View style={styles.subTitleContainer}>
    //       <Text style={styles.subTitle}>Deviens ambassadoeur en un clic.</Text>
    //     </View>
    //   </View>
    //   <View style={styles.buttonContainer}>
    //     <View style={styles.becomeAmbassador}>
    //       <Text style={styles.ambassador}>Commencer &#x27A4;</Text>
    //     </View>
    //   </View>
    // </View>
    <View style={{ flex : 1}}>
      <StatusBar hidden={true} />
      <Swiper autoplay={true} showsButtons={false} showsPagination={false} autoplayTimeout={10} style={{ backgroundColor: Colors.active}} >
      <ImageBackground style={{ flex:1, backgroundColor: Colors.text, opacity: .2}} resizeMethod="auto" resizeMode="cover" source={Customers1} />
      </Swiper>
          <View style={styles.details}>
              <Text style={styles.titleAmbassador}>E-ambassador</Text>
              <Text  style={styles.subTitleAmbassador}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae </Text>

              <TouchableOpacity 
                activeOpacity={.8}
                onPress={() => navigate('Home')}
              >
                <View style={styles.btn}>
                  <Text style={styles.textBtn}>Démarrer </Text>
                </View>
              </TouchableOpacity>
          </View>
        
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container : {
    flex: 1,    
  },
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.text,
    opacity: .6
  },
  image: {
    width: width,
    height: height,
  },
  textContainer: {
    position: 'absolute',
    bottom: 200,
    marginLeft: 20,
    height: 120,
    alignItems: "flex-start",
    justifyContent: "center"
  },
  titleContainer: {

    width: 300,
    height: 70,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center"
  },
  title : {
    fontFamily : Font['poppins-bold'],
    fontSize: FontSize.xLarge,
    color: Colors.lightPrimary,
  },
  subTitleContainer: {
    width: 250,
    height: 50,
    backgroundColor: Colors.primary,
    opacity: .7,
    alignItems: "center",
    justifyContent: "center"
  },
  subTitle: {
    fontFamily : Font['poppins-regular'],
    fontSize: FontSize.small,
    color: Colors.lightPrimary,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 70,
    width: 370,
    height: 60,
    marginLeft: 20
  },
  becomeAmbassador: {
    width: 180,
    height: 60,
    backgroundColor: Colors.primary,
    opacity: .8,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    //alignSelf: "center"
  },
  ambassador:  {
    fontFamily: Font["poppins-regular"],
    //fontWeight: "600" ,
    fontSize: FontSize.Large,
    color: Colors.lightPrimary
  },
  details: {
    height: '50%',
    bottom: 0,
    position: "absolute",
    paddingHorizontal: 40
  },
  titleAmbassador: {
    color: Colors.background,
    fontFamily: Font["poppins-bold"],
    fontSize: FontSize.xxLarge,
  },
  subTitleAmbassador: {
    color: Colors.gray,
    opacity: .6,
    fontFamily: Font["poppins-regular"],
    fontSize: FontSize.medium,
    textAlign: "justify",
    letterSpacing: - .1
  },
  textBtn: {
    color: Colors.active,
    fontFamily: Font["poppins-bold"],
    fontWeight: "700",
    fontSize: FontSize.large,
  },
  btn: {
    height: 50,
    width: 150,
    backgroundColor: Colors.background,
    marginTop: Spacing*2,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center"
  }

});
