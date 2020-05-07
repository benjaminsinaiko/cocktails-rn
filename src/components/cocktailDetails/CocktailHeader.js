import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, useTheme } from '@ui-kitten/components';

const CocktailHeader = ({ name }) => {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.header,
        { backgroundColor: theme['background-basic-color-1'] },
      ]}
    >
      <Text
        category='h2'
        style={[styles.text, { color: theme['text-primary-color'] }]}
      >
        {name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 150,
    width: '100%',
    padding: 20,
    marginHorizontal: -24,
    marginVertical: -16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CocktailHeader;
