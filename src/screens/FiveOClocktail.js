import React, { useReducer } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';

import SpiritSelector from '../components/pickCocktail/SpiritSelector.js';
import RandomCocktailButton from '../components/common/RandomCocktailButton';
import { spiritsObject } from '../utils/spiritsObject';

const spiritsReducer = (state, action) => {
  switch (action.type) {
    case 'toggle_spirit':
      return state.map(spirit =>
        spirit.id === action.payload
          ? { ...spirit, isSelected: !spirit.isSelected }
          : spirit
      );
    case 'set_previous': {
      return action.payload;
    }
    case 'select_all':
      return spiritsObject;
    default:
      state;
  }
};

const FiveOClocktail = () => {
  const [state, dispatch] = useReducer(spiritsReducer, spiritsObject);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={styles.container}>
        <View>
          <Text>Selected Spirits</Text>
          {}
        </View>
        <SpiritSelector spirits={state} dispatch={dispatch} />
        <Text category='h1'>Random Cocktail</Text>
        <RandomCocktailButton />
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default FiveOClocktail;
