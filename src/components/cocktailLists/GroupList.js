import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { Text, List, useTheme } from '@ui-kitten/components';

import CocktailCard from '../common/CocktailCard';
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
            imageStyle={{ tintColor: theme['color-primary-default'] }}
            style={[styles.image, { borderColor: theme['color-primary-300'] }]}
          >
            <View
              style={[
                styles.textBox,
                {
                  backgroundColor: theme['color-basic-control-transparent-300'],
                },
              ]}
            >
              <Text category='h5' style={[styles.text]}>
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
      <List
        data={cocktails}
        renderItem={({ item }) => (
          <CocktailCard
            header={''}
            glassName={item.glass}
            footer={item.name}
            cocktailId={item.id}
          />
        )}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cocktailContainer: {
    flex: 1,
    width: 150,
    paddingRight: 15,
    paddingLeft: 5,
    paddingVertical: 15,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
  },
  textBox: {
    width: '100%',
    minHeight: 30,
  },
  text: {
    paddingHorizontal: 3,
    paddingVertical: 3,
    textAlign: 'center',
  },
});

export default CocktailListScreen;
