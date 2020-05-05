import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Layout, List, ListItem, Avatar, Spinner } from '@ui-kitten/components';

import { useCocktails } from '../contexts/cocktailsContext';
import getGlassIcon from '../utils/getGlassIcon';

const ListAlphaScreen = ({ navigation }) => {
  const { state } = useCocktails();

  const glassImage = glassName => () => {
    return (
      <Avatar style={{ tintColor: null }} source={getGlassIcon(glassName)} />
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
          navigation.navigate('Recipe', {
            cocktailId: item.id,
          })
        }
      />
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {state.isLoading ? (
        <Layout style={styles.spinner}>
          <Spinner />
        </Layout>
      ) : (
        <Layout style={styles.container}>
          <List
            keyExtractor={cocktail => cocktail.id}
            data={state.cocktails}
            renderItem={renderListItem}
          />
        </Layout>
      )}
    </SafeAreaView>
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
    marginHorizontal: 15,
  },
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ListAlphaScreen;
