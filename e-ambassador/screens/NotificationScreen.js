import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { COLORS, colors, sizes } from '../constants/Theme';

const NotificationScreen = ({navigation}) => {
  const [value, setValue] = React.useState(0);
  const items = [
    {
      icon: 'truck',
      label: 'Gas Station',
      category: 'Transportation',
      color: '#ff9773',
      price: 64.4,
    }, {
      icon: 'truck',
      label: 'Gas Station',
      category: 'Transportation',
      color: '#ff9773',
      price: 64.4,
    }, {
      icon: 'truck',
      label: 'Gas Station',
      category: 'Transportation',
      color: '#ff9773',
      price: 64.4,
    }, {
      icon: 'truck',
      label: 'Gas Station',
      category: 'Transportation',
      color: '#ff9773',
      price: 64.4,
    }, {
      icon: 'truck',
      label: 'Gas Station',
      category: 'Transportation',
      color: '#ff9773',
      price: 64.4,
    }, {
      icon: 'truck',
      label: 'Gas Station',
      category: 'Transportation',
      color: '#ff9773',
      price: 64.4,
    }, {
      icon: 'truck',
      label: 'Gas Station',
      category: 'Transportation',
      color: '#ff9773',
      price: 64.4,
    }, {
      icon: 'truck',
      label: 'Gas Station',
      category: 'Transportation',
      color: '#ff9773',
      price: 64.4,
    }, {
      icon: 'truck',
      label: 'Gas Station',
      category: 'Transportation',
      color: '#ff9773',
      price: 64.4,
    },
    {
      icon: 'github',
      label: 'Petco',
      category: 'Pet Store',
      color: '#c4bff0',
      price: 120.49,
    },
    {
      icon: 'shopping-cart',
      label: 'Target',
      category: 'Grocery Store',
      color: '#f5b755',
      price: 254.12,
    },
    {
      icon: 'map',
      label: 'United',
      category: 'Travel',
      color: '#c4bff0',
      price: 1943.0,
    },
    {
      icon: 'coffee',
      label: 'Starbucks',
      category: 'Coffee Shop',
      color: '#f5b755',
      price: 3.85,
    },
    {
      icon: 'film',
      label: 'AMC',
      category: 'Entertainment',
      color: '#ff9773',
      price: 12.55,
    },
  ];
  
  function noNotification() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}></Text>

        <View style={styles.empty}>
          <FeatherIcon color="#94A3B8" name="bell-off" size={36} />

          <Text style={styles.emptyTitle}>Aucune notification</Text>

          <Text style={styles.emptyDescription}>
            Vous n'avez aucune notification pour le moment
          </Text>

          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Actualiser</Text>

              <FeatherIcon
                color="#94A3B8"
                name="refresh-cw"
                size={18}
                style={{ marginLeft: 12 }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f6f6f6' }}>
      <ScrollView contentContainerStyle={styles.containerN}>
        <Text style={styles.title}>Notifications</Text>

        {items.map(({ icon, label, category, color, price }, index) => {
          return (
            <View key={index} style={styles.cardN}>
              <View style={[styles.cardIconN, { backgroundColor: color }]}>
                <FeatherIcon color="#131313" name={icon} size={20} />
              </View>

              <View style={styles.cardBodyN}>
                <Text style={styles.cardTitleN}>{label}</Text>

                <Text style={styles.cardCategoryN}>{category}</Text>
              </View>

              <Text style={styles.cardPriceN}>${price.toFixed(2)}</Text>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  )
}

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    paddingBottom: 140,
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 12,
  },
  empty: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyTitle: {
    fontSize: 21,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
    marginTop: 16,
  },
  emptyDescription: {
    fontSize: sizes.width * 0.03,
    fontWeight: '500',
    color: '#878787',
    marginBottom: 24,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    backgroundColor: colors.secondCardColor,
    borderColor: colors.secondCardColor,
  },
  btnText: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '600',
    color: "#94A3B8",
  },

  // Notification style
  containerN: {
    padding: 24,
  },
  titleN: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 12,
  },
  cardN: {
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  cardIconN: {
    width: 46,
    height: 46,
    borderRadius: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardBodyN: {
    marginLeft: 12,
  },
  cardTitleN: {
    fontSize: 16,
    fontWeight: '600',
    color: '#131313',
    marginBottom: 4,
  },
  cardCategoryN: {
    fontSize: 14,
    fontWeight: '500',
    color: '#7f7f7f',
  },
  cardPriceN: {
    marginLeft: 'auto',
    fontSize: 17,
    fontWeight: '700',
    color: '#2c9d3b',
  },
});