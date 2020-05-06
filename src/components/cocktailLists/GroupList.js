import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { Layout, Text, List, useTheme } from '@ui-kitten/components';

import getGlassIcon from '../../utils/getGlassIcon';

const CocktailListScreen = ({ navigation, cocktails }) => {
  const theme = useTheme();

  function renderItem({ item }) {
    const glassImg = getGlassIcon(item.glass);

    return (
      <View style={styles.cocktailContainer}>
        <ImageBackground
          source={glassImg}
          style={[
            styles.image,
            { backgroundColor: theme['color-primary-200'] },
          ]}
          blurRadius={2}
        >
          <View style={styles.textBox}>
            <Text
              category='h5'
              style={[styles.text, { color: theme['color-primary-800'] }]}
            >
              {item.name}
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  }

  return (
    <Layout style={styles.container} level='4'>
      <List data={cocktails} renderItem={renderItem} horizontal />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cocktailContainer: {
    flex: 1,
    width: 150,
    marginRight: 15,
    marginLeft: 5,
    borderRadius: 5,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textBox: {
    width: '100%',
    minHeight: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  text: {
    paddingHorizontal: 3,
    paddingVertical: 3,
    textAlign: 'center',
  },
});

export default CocktailListScreen;
