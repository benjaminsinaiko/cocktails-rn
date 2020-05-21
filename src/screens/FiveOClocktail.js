import React, { useState, useReducer, useEffect } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { Layout, Divider, Text, useTheme } from '@ui-kitten/components';

import { useCocktails } from '../contexts/cocktailsContext';
import SpiritFilter from '../components/pickCocktail/SpiritFilter.js';
import CountDisplay from '../components/pickCocktail/CountDisplay';
import SelectedSearch from '../components/pickCocktail/SelectedSearch';
import PickRandomCocktail from '../components/pickCocktail/PickRandomCocktail';
import { filterByType } from '../utils/filterCocktails';
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
      const selected = state.spirits.filter(
        spirit => spirit.isSelected === true
      );

      return {
        ...state,
        previous: state.spirits,
        allSelected: Boolean(selected.length === spiritsObject.length),
      };
    }
    case 'select_all':
      return {
        ...state,
        spirits: spiritsObject,
        allSelected: true,
      };
    default:
      state;
  }
};

const initialState = {
  previous: spiritsObject,
  spirits: spiritsObject,
  allSelected: true,
};

const FiveOClocktail = () => {
  const theme = useTheme();
  const {
    state: { cocktails },
  } = useCocktails();
  const [state, dispatch] = useReducer(spiritsReducer, initialState);
  const [selectedSpirits, setSelectedSpirits] = useState([]);
  const [filteredCocktails, setfilteredCocktails] = useState(cocktails);

  useEffect(() => {
    const selected = state.spirits.reduce((acc, spirit) => {
      if (spirit.isSelected === true) {
        acc.push(spirit.label);
      }
      return acc;
    }, []);
    setSelectedSpirits(selected);
  }, [state.spirits]);

  useEffect(() => {
    if (state.allSelected) {
      setfilteredCocktails(cocktails);
    } else {
      const filtered = filterByType(cocktails, selectedSpirits);
      setfilteredCocktails(filtered);
    }
  }, [selectedSpirits, cocktails, state.allSelected]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={styles.container}>
        <View style={styles.filterContainer}>
          <SpiritFilter spirits={state.spirits} dispatch={dispatch} />
          <CountDisplay
            allSelected={state.allSelected}
            selected={selectedSpirits.length}
            filteredCocktails={filteredCocktails}
          />
        </View>
        <Divider
          style={[styles.divider, { borderColor: theme['text-primary-color'] }]}
        />
        <View style={styles.searchContainer}>
          <SelectedSearch filteredCocktails={filteredCocktails} />
          <Text category='h5' appearance='hint'>
            or
          </Text>
          <PickRandomCocktail filteredCocktails={filteredCocktails} />
        </View>
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
    width: '40%',
    marginVertical: 30,
  },
  searchContainer: {
    alignItems: 'center',
  },
});

export default FiveOClocktail;
