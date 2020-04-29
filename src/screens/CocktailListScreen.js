import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, List, ListItem, Avatar } from '@ui-kitten/components';

import { useCocktails } from '../contexts/cocktailsContext';
import sampleCocktails from '../utils/sampleCocktails.json';

const CocktailListScreen = ({ navigation }) => {
  // const {
  //   state: { cocktails },
  // } = useCocktails();
  const cocktails = sampleCocktails;
  console.log('cocktails', cocktails);

  const glassImage = glassName => () => {
    return (
      <Avatar
        style={{ tintColor: null }}
        source={require(`../icons/${glassName.toLowerCase()}.png`)}
      />
    );
  };

  function renderListItem({ item }) {
    return (
      <ListItem
        style={styles.item}
        title={item.name}
        description={item.type}
        accessoryRight={glassImage(item.glass)}
        onPress={() =>
          navigation.navigate('Cocktail', {
            name: item.name,
          })
        }
      />
    );
  }

  return (
    <Layout style={styles.container}>
      <List
        keyExtractor={cocktail => cocktail.id}
        data={cocktails}
        renderItem={renderListItem}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default CocktailListScreen;
