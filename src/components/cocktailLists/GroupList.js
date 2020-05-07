import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { Text, List, useTheme } from '@ui-kitten/components';

import getGlassIcon from '../../utils/getGlassIcon';

const CocktailListScreen = ({ cocktails }) => {
  const navigation = useNavigation();
  const theme = useTheme();

  function renderItem({ item }) {
    const glassImg = getGlassIcon(item.glass);

    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Recipe', {
            cocktailId: item.id,
          })
        }
      >
        <View style={styles.cocktailContainer}>
          <ImageBackground
            source={glassImg}
            style={[
              styles.image,
              { backgroundColor: theme['color-primary-100'] },
            ]}
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
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container} level='4'>
      <List data={cocktails} renderItem={renderItem} horizontal />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cocktailContainer: {
    flex: 1,
    width: 175,
    paddingRight: 15,
    paddingLeft: 5,
    paddingVertical: 15,
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
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  text: {
    paddingHorizontal: 3,
    paddingVertical: 3,
    textAlign: 'center',
  },
});

export default CocktailListScreen;
