import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, StyleSheet } from 'react-native';
import { ListItem, Text, useTheme } from '@ui-kitten/components';

import getGlassIcon from '../../utils/getGlassIcon';

const CocktailCard = ({ header, glassName, footer, cocktailId }) => {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <ListItem
      style={styles.itemContainer}
      onPress={() => navigation.navigate('Recipe', { cocktailId })}
    >
      <View
        style={[styles.header, { backgroundColor: theme['color-primary-800'] }]}
      >
        <Text category='c1' appearance='hint'>
          {header}
        </Text>
      </View>
      <View style={styles.body}>
        <Image
          style={[styles.image, { tintColor: theme['color-primary-default'] }]}
          source={getGlassIcon(glassName)}
        />
      </View>
      <View style={[styles.footer]}>
        <Text
          category='h6'
          numberOfLines={2}
          adjustsFontSizeToFit
          style={styles.footerText}
        >
          {footer}
        </Text>
      </View>
    </ListItem>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'column',
    width: 160,
    margin: 10,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  header: {
    width: '100%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    height: 100,
  },
  image: {
    flex: 1,
    aspectRatio: 1.25,
    resizeMode: 'contain',
  },
  footer: {
    justifyContent: 'center',
    height: 50,
    width: '100%',
  },
  footerText: {
    textAlign: 'center',
    width: '100%',
    paddingHorizontal: 10,
  },
});

export default CocktailCard;
