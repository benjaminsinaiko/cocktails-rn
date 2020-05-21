import React from 'react';
import { View, StyleSheet } from 'react-native';
import { List, Text, Icon, useTheme } from '@ui-kitten/components';

import CocktailCard from '../components/common/CocktailCard';

const Header = ({ spiritsArray }) => {
  const theme = useTheme();
  return (
    <View
      style={[
        styles.headerContainer,
        { backgroundColor: theme['background-basic-color-1'] },
      ]}
    >
      {spiritsArray.map(spirit => (
        <View key={spirit} style={styles.headerItem}>
          <Icon
            style={styles.icon}
            fill={theme['text-hint-color']}
            name='arrow-right'
          />
          <Text category='s1' appearance='hint'>
            {spirit}
          </Text>
        </View>
      ))}
    </View>
  );
};

const FilteredCocktails = ({ route }) => {
  const { cocktails, spirits } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <List
        data={cocktails}
        contentContainerStyle={styles.list}
        ListHeaderComponent={<Header spiritsArray={spirits} />}
        numColumns={2}
        renderItem={({ item }) => (
          <CocktailCard
            header={item.type}
            glassName={item.glass}
            footer={item.name}
            cocktailId={item.id}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginHorizontal: 15,
    marginTop: 10,
    paddingVertical: 10,
  },
  headerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  icon: {
    width: 10,
    height: 10,
    marginRight: 3,
  },
  list: {
    alignItems: 'center',
  },
});

export default FilteredCocktails;
