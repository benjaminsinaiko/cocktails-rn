import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, useTheme } from '@ui-kitten/components';

const CocktailGlass = ({ glass }) => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Avatar
        style={{ width: '65%', tintColor: theme['color-warning-default'] }}
        source={require(`../../icons/${glass}.png`)}
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
