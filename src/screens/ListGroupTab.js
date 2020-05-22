import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { Layout, Text, List, Spinner } from '@ui-kitten/components';

import { useCocktails } from '../contexts/cocktailsContext';
import groupByType from '../utils/groupByType';
import GroupList from '../components/cocktailLists/GroupList';

const ListGroupTab = () => {
  const { state } = useCocktails();
  const { cocktails } = state;
  const [cocktailsByType, setCocktailsByType] = useState(null);

  useEffect(() => {
    const grouped = groupByType(cocktails);
    setCocktailsByType(grouped);
  }, []);

  if (!cocktailsByType) {
    return (
      <SafeAreaView style={styles.spinner} size='large'>
        <Spinner />
      </SafeAreaView>
    );
  }

  function renderItem({ item }) {
    return (
      <View style={styles.groupContainer}>
        <Text category='h5' style={styles.groupLabel}>
          {item[0]}
        </Text>
        <GroupList cocktails={item[1]} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Layout>
        <List data={cocktailsByType} renderItem={renderItem} />
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  groupContainer: {
    flex: 1,
    height: 200,
    paddingVertical: 5,
  },
  groupLabel: {
    paddingLeft: 10,
    paddingBottom: 5,
  },
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ListGroupTab;
