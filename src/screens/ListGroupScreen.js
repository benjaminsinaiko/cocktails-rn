import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, StyleSheet } from 'react-native';
import { Layout, Text, Spinner } from '@ui-kitten/components';

import { useCocktails } from '../contexts/cocktailsContext';
import GroupList from '../components/cocktailLists/GroupList';

function groupByType(cocktails) {
  return cocktails.reduce((acc, cocktail) => {
    const key = cocktail.type;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(cocktail);
    return acc;
  }, {});
}

const ListGroupScreen = () => {
  const { state } = useCocktails();
  const { isLoading, cocktails } = state;
  const [cocktailsByType, setCocktailsByType] = useState(null);

  // console.log('cocktails', groupedCocktails);

  useEffect(() => {
    if (!isLoading) {
      const grouped = groupByType(cocktails);
      setCocktailsByType(Object.entries(grouped));
    }
  }, [isLoading]);

  if (!cocktailsByType) {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <Spinner />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {cocktailsByType.map(group => (
          <View key={group[0]} style={styles.groupContainer}>
            <Text category='h5' style={styles.groupLabel}>
              {group[0]}
            </Text>
            <GroupList cocktails={group[1]} />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  groupContainer: {
    height: 175,
    marginVertical: 15,
    justifyContent: 'center',
  },
  groupLabel: {
    paddingLeft: 5,
    paddingBottom: 5,
  },
});

export default ListGroupScreen;
