import React from 'react';
import { View, StyleSheet } from 'react-native';
import { List, Icon, Text, Divider, useTheme } from '@ui-kitten/components';

import sampleCocktails from '../utils/sampleCocktails.json';
import displayFraction from '../utils/displayFraction';
import { color } from 'react-native-reanimated';

const CocktailIngredients = ({ ingredients }) => {
  const theme = useTheme();
  console.log('ingredients', ingredients);

  function IngredientItem({ item }) {
    return (
      <>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginHorizontal: 16,
            height: 60,
            flexWrap: 'wrap',
          }}
        >
          <View
            style={[
              styles.mainItemBox,
              {
                flex: 1,
              },
            ]}
          >
            <Icon
              name='arrow-right'
              fill={theme['color-warning-default']}
              style={{ width: 15, height: 15 }}
            />
          </View>
          <View
            style={[
              styles.mainItemBox,
              {
                flex: 2,
                alignItems: 'center',
              },
            ]}
          >
            <Text>{displayFraction(item.quantity)}</Text>
          </View>
          <View
            style={[
              styles.mainItemBox,
              {
                flex: 2,
                alignItems: 'flex-start',
              },
            ]}
          >
            <Text>{item.measurement}</Text>
          </View>
          <View
            style={[
              styles.mainItemBox,
              {
                flex: 8,
              },
            ]}
          >
            <Text category='s1'>{item.name}</Text>
          </View>
        </View>
        {item.suggested ? (
          <View style={styles.suggested}>
            <Text category='p2' appearance='hint'>
              Suggeseted: {item.suggested}
            </Text>
          </View>
        ) : null}
      </>
    );
  }

  return (
    <List
      style={styles.container}
      data={ingredients}
      ItemSeparatorComponent={Divider}
      renderItem={IngredientItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginBottom: 20,
  },
  mainItemBox: {
    height: 40,
    paddingRight: 5,
    justifyContent: 'center',
  },
  suggested: {
    alignSelf: 'flex-end',
    height: 20,
    paddingRight: 5,
  },
});

export default CocktailIngredients;
