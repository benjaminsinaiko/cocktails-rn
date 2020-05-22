import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, useTheme } from '@ui-kitten/components';

const CocktailHeader = ({ name, type }) => {
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
        numberOfLines={2}
        adjustsFontSizeToFit
      >
        {name}
      </Text>
      <Text
        category='s1'
        appearance='hint'
        style={[styles.text, { marginTop: 10 }]}
      >
        {type}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 150,
    width: '75%',
    padding: 15,
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
