import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Animated,
} from 'react-native';
import Swiper from 'react-native-swiper';
import Colors from '../constants/Colors';
import { COLORS } from '../constants/Theme';
import Photo from "../assets/images/22.jpeg";

const { width, height } = Dimensions.get('window');

const slides = [
  {
    title: 'Bienvenue à E-ambassador!',
    message: " Transformez les opportunités en succès avec nous.",
    action: 'Démarrer',
  },
  {
    title: 'Récoltez les Récompenses',
    message:
      "Propulsez Icebrain, gagnez des récompenses. Vos actions font la différence.",
    action: 'Continue',
  },
  {
    title: "Prêt pour le vol  ?",
    message:
      "En tant qu'ambassadeur Icebrain ? Rejoignez-nous pour façonner l'avenir.",
    action: "Allons-y",
  },
];

const  OnboardingScreen = ({navigation}) => {
  const [slide, setSlide] = useState(0);

  const swiper = useRef();
  const scrollX = useRef(new Animated.Value(0)).current;
  const contentOpacity = useRef(new Animated.Value(1)).current;

  const animatedBackgroundLeft = scrollX.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [1, 0, -1],
  });

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={{ left: animatedBackgroundLeft }}>
        <Image
          source={{ uri: 'https://withfra.me/shared/Landing.1.png' }}
          resizeMode="contain"
          style={styles.slideImage}
        />
      </Animated.View>
      <Swiper
        ref={swiper}
        showsPagination={false}
        loop={false}
        onIndexChanged={setSlide}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ], 
          { useNativeDriver: false },
        )}
        onTouchStart={() => {
          Animated.timing(contentOpacity, {
            toValue: 0,
            duration: 250,
            useNativeDriver: true,
          }).start();
        }}
        onTouchEnd={() => {
          Animated.timing(contentOpacity, {
            toValue: 1,
            duration: 250,
            useNativeDriver: true,
          }).start();
        }}
        scrollEventThrottle={1}>
        {slides.map((item, index) => {
          return (
            <Animated.View
              key={index}
              style={[styles.slide, { opacity: contentOpacity }]}>
              <Text style={styles.slideTitle}>{item.title}</Text>
              <Text style={styles.slideText}>{item.message}</Text>

              <TouchableOpacity
                onPress={() => {
                  swiper.current.scrollTo(slide + 1, true),
                  navigation.navigate('Login')
                }}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>{item.action}</Text>
                </View>
              </TouchableOpacity>
            </Animated.View>
          );
        })}
      </Swiper>
    </SafeAreaView>
  );
}

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#1c1f26',
    backgroundColor: COLORS.black,
  },
  slide: {
    flex: 1,
    backgroundColor: 'transparent',
    position: 'relative',
    justifyContent: 'flex-end',
    paddingHorizontal: 36,
  },
  slideImage: {
    width: width * slides.length,
    height: 0.6 * height,
    position: 'absolute',
    top: 47,
    left: 0,
  },
  slideTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 12,
    textAlign: 'center',
  },
  slideText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#a9b1cf',
    textAlign: 'center',
  },
  button: {
    backgroundColor: Colors.red,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 36,
    marginVertical: 48,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
});