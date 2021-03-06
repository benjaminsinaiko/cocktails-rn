import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, useTheme } from '@ui-kitten/components';

const CocktailAttributes = ({ cocktail }) => {
  const theme = useTheme();

  return (
    <View
      style={[styles.container, { borderColor: theme['color-warning-400'] }]}
    >
      <View
        style={[styles.topRow, { borderColor: theme['color-warning-400'] }]}
      >
        <Text category='c2' appearance='hint'>
          Glass: <Text category='c2'>{cocktail.glass}</Text>
        </Text>
        <Text category='c2' appearance='hint'>
          Ice: <Text category='c2'>{cocktail.ice}</Text>
        </Text>
      </View>
      <Text category='c2' appearance='hint'>
        Method: <Text category='c2'>{cocktail.method}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: 80,
    paddingHorizontal: 10,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
  },
});

export default CocktailAttributes;
