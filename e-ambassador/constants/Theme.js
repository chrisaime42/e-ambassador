import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const colors = {
  // primary: '#070f18',
  // gray: '#8b8989',
  // lightGray: '#b2b2b2',
  // light: '#fbfbfb',
  // white: '#fff',
  // black: '#000',
  // red10: "#fdedec",
  // red20: "#f9c3bf",
  // red30:"#f59892",
  // red40: "#f16e65",
  // red50: "#ed4438",
  // red60: "#e02114",
  // red70: "#b31a10",
  // red80: "#86130c",
  // red90: "#590d08",
  // red100: "#2c0604",
  // vred10: "#fce6e4",
  // vred30:"#f4918a",
  // vred60: "#d92013",
  // vred100: "#250503",
  // assets: "#f0f0f0",
  // card:"#bfbfbf",
  // background: "#767676",
  // title: "#141414",
  // background2: "#2a2a2a",
  //backgroundColor: "#364F6B",
  //cardColor: "#304863",
  //textColor: "#FFFFFF",
  //titleItemColor: "#43dde6",
 // buttonColor: "#fc5185",
  assetsColor: "#fc5185",
  mainColor: "#100b11",
  secondColor: "#dce0d9",
  accentColor: "#9381ff",
  backgroundColor: "#ffffff",
  textColor: "#ffffff",
  statsCardColor: "#d9dfd5",
  secondCardColor: "#f5f5f5",
  bodyColor: "#bab9ba"
  
};


export const shadow = {
  light: {
    shadowColor: colors.black,
    shadowRadius: 4,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  dark: {
    shadowColor: colors.black,
    shadowRadius: 4,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
};

//

export const sizes = {
  width,
  height,
  title: 50,
  balanceTitle: 40,
  h1: 32,
  h2: 24,
  h3: 18,
  h4: 16,
  h5: 14,
  body: 12,
  radius: 16,
  radius25: 25,
  radius30: 30,
  radius50: 50,
};

export const spacing = {
  s: 8,
  m: 18,
  sl: 12,
  l: 24,
  xl: 40,
  xxl: 50
};