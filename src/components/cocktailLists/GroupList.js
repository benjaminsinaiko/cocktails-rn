import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { Layout, Text, List } from '@ui-kitten/components';

import getGlassIcon from '../../utils/getGlassIcon';

const CocktailListScreen = ({ navigation, cocktails }) => {
  function renderItem({ item }) {
    console.log('item', item.glass);
    const glassImg = getGlassIcon(item.glass);

    return (
      <View style={styles.cocktailContainer}>
        <ImageBackground source={glassImg} style={styles.image} blurRadius={2}>
          <View style={styles.textBox}>
            <Text category='h5' style={styles.text}>
              {item.name}
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  }

  return (
    <Layout style={styles.container}>
      <List data={cocktails} renderItem={renderItem} horizontal />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'blue',
    borderWidth: 1,
  },
  cocktailContainer: {
    flex: 1,
    width: 150,
    marginRight: 15,
    marginLeft: 5,
    borderColor: 'orange',
    borderWidth: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
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
