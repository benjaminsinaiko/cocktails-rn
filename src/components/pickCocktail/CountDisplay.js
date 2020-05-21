import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '@ui-kitten/components';

const CountDisplay = ({ allSelected, selected, filteredCocktails }) => {
  return (
    <View style={styles.container}>
      <View style={styles.countBox}>
        <Text category='h1'>{allSelected ? 'All' : selected}</Text>
        <Text>
          <Text category='s1' appearance='hint'>
            spirits selected
          </Text>
        </Text>
      </View>
      <View style={styles.countBox}>
        <Text category='h1'>{filteredCocktails.length}</Text>
        <Text>
          <Text category='s1' appearance='hint'>
            cocktails
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 25,
  },
  countBox: {
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CountDisplay;
