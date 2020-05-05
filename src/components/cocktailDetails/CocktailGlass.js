import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, useTheme } from '@ui-kitten/components';

import getGlassIcon from '../../utils/getGlassIcon';

const CocktailGlass = ({ glassName }) => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Avatar
        style={{ width: '65%', tintColor: theme['color-warning-default'] }}
        source={getGlassIcon(glassName)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    width: 75,
  },
});

export default CocktailGlass;
