import React from 'react';
import {View} from 'react-native';
import {colors, shadow} from '../constants/Theme';
import Icon from './Icon';

const Button = ({active, style}) => {
  return (
    <View
      style={[
        {
          backgroundColor: colors.white,
          padding: 4,
          borderRadius: 20,
        },
        shadow.light,
        style,
      ]}>
      <Icon icon={active ? 'FavoriteFilled' : 'Favorite'} size={24} />
    </View>
  );
};

export default Button;