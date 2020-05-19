import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';

import RandomCocktailButton from '../components/ui/RandomCocktailButton';

const FiveOClocktail = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={styles.container}>
        <Text category='h1'>Random Cocktail</Text>
        <RandomCocktailButton />
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FiveOClocktail;
