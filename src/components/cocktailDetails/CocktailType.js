import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '@ui-kitten/components';

const CocktailType = ({ type }) => {
  return (
    <View style={styles.container}>
      <Text category='s2'>{type}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    marginLeft: 15,
    marginBottom: 15,
    marginTop: -30,
  },
});

export default CocktailType;
