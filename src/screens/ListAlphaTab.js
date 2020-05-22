import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import {
  Layout,
  List,
  ListItem,
  Text,
  Avatar,
  useTheme,
} from '@ui-kitten/components';

import { useCocktails } from '../contexts/cocktailsContext';
import getGlassIcon from '../utils/getGlassIcon';

const ListAlphaTab = ({ navigation }) => {
  const theme = useTheme();
  const { state } = useCocktails();

  const glassImage = glassName => () => {
    return (
      <Avatar
        style={{ tintColor: theme['color-primary-default'] }}
        source={getGlassIcon(glassName)}
      />
    );
  };

  function TitleText(props) {
    return (
      <Text
        category='s1'
        style={{ color: props.color, marginHorizontal: 8, marginVertical: 5 }}
      >
        {props.name}
      </Text>
    );
  }

  function renderListItem({ item }) {
    return (
      <ListItem
        style={styles.item}
        title={() => (
          <TitleText name={item.name} color={theme['color-primary-600']} />
        )}
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
      <Layout style={styles.container}>
        <List
          keyExtractor={cocktail => cocktail.id}
          data={state.cocktails}
          renderItem={renderListItem}
        />
      </Layout>
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

export default ListAlphaTab;
