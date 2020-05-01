import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '@ui-kitten/components';

const CocktailsGarnish = ({ garnish }) => {
  return (
    <View style={styles.container}>
      <Text category='c2' appearance='hint'>
        Garnish: <Text category='c2'>{garnish}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
});

export default CocktailsGarnish;
