import React, { useState, useReducer, useEffect } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { Layout, Divider, Text, useTheme } from '@ui-kitten/components';

import SpiritFilter from '../components/pickCocktail/SpiritFilter.js';
import SpiritCountDisplay from '../components/pickCocktail/SpiritCountDisplay';
import RandomCocktailButton from '../components/common/RandomCocktailButton';
import { spiritsObject } from '../utils/spiritsObject';

const spiritsReducer = (state, action) => {
  switch (action.type) {
    case 'toggle_spirit':
      return {
        ...state,
        spirits: state.spirits.map(spirit =>
          spirit.id === action.payload
            ? { ...spirit, isSelected: !spirit.isSelected }
            : spirit
        ),
      };
    case 'set_previous': {
      return {
        ...state,
        spirits: state.previous,
      };
    }
    case 'set_filter': {
      return {
        ...state,
        previous: state.spirits,
      };
    }
    case 'select_all':
      return {
        ...state,
        spirits: spiritsObject,
      };
    default:
      state;
  }
};

const initialState = {
  previous: spiritsObject,
  spirits: spiritsObject,
};

const FiveOClocktail = () => {
  const theme = useTheme();
  const [state, dispatch] = useReducer(spiritsReducer, initialState);
  const [selectedSpirits, setSelectedSpirits] = useState([]);

  useEffect(() => {
    const selected = state.spirits.reduce((acc, spirit) => {
      if (spirit.isSelected === true) {
        acc.push(spirit.label);
      }
      return acc;
    }, []);
    setSelectedSpirits(selected);
  }, [state.spirits]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={styles.container}>
        <View style={styles.filterContainer}>
          <SpiritFilter spirits={state.spirits} dispatch={dispatch} />
          <SpiritCountDisplay
            total={state.spirits.length}
            selected={selectedSpirits.length}
          />
        </View>
        <Divider
          style={[styles.divider, { borderColor: theme['text-primary-color'] }]}
        />
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
  filterContainer: {
    marginTop: 15,
    marginBottom: 10,
  },
  divider: {
    borderWidth: 1,
    width: '80%',
    marginVertical: 30,
  },
});

export default FiveOClocktail;
