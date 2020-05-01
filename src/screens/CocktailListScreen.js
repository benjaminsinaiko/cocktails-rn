import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Layout, List, ListItem, Spinner, Avatar } from '@ui-kitten/components';

import { useCocktails } from '../contexts/cocktailsContext';
import sampleCocktails from '../utils/sampleCocktails.json';

const CocktailListScreen = ({ navigation }) => {
  const { state } = useCocktails();
  // const cocktails = sampleCocktails;
  console.log('state', state);

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
            cocktailId: item.id,
          })
        }
      />
    );
  }

  return (
    <Layout style={styles.container}>
      {state.isLoading ? (
        <View style={{ alignItems: 'center' }}>
          <Spinner size='large' status='warning' />
        </View>
      ) : (
        <List
          keyExtractor={cocktail => cocktail.id}
          data={state.cocktails}
          renderItem={renderListItem}
        />
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  item: {
    marginVertical: 5,
    marginHorizontal: 16,
  },
});

export default CocktailListScreen;
