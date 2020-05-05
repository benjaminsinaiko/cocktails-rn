import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Layout,
  Text,
  List,
  ListItem,
  Spinner,
  Avatar,
} from '@ui-kitten/components';

const CocktailListScreen = ({ navigation }) => {
  return (
    <Layout style={styles.container}>
      <Text>Group list</Text>
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
