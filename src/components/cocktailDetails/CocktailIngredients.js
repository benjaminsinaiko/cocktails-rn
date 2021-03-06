import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  List,
  Icon,
  Text,
  Divider,
  useTheme,
  Layout,
} from '@ui-kitten/components';

import displayFraction from '../../utils/displayFraction';

const CocktailIngredients = ({ ingredients }) => {
  const theme = useTheme();

  function IngredientItem({ item }) {
    return (
      <>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginHorizontal: 16,
            height: 40,
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
              fill={theme['color-primary-default']}
              style={{ width: 15, height: 15 }}
            />
          </View>
          <View
            style={[
              styles.mainItemBox,
              {
                flex: 2,
                alignItems: 'center',
                color: 'red',
              },
            ]}
          >
            <Text category='c2'>{displayFraction(item.quantity)}</Text>
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
            <Text category='p2'>{item.measurement}</Text>
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
            <Text
              category='p2'
              appearance='hint'
              style={{ fontStyle: 'italic' }}
            >
              {item.suggested}
            </Text>
          </View>
        ) : null}
      </>
    );
  }

  return (
    <Layout style={styles.container}>
      <List
        style={styles.list}
        data={ingredients}
        ItemSeparatorComponent={Divider}
        renderItem={IngredientItem}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginBottom: 20,
  },
  list: {
    paddingHorizontal: 10,
    paddingVertical: 10,
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
