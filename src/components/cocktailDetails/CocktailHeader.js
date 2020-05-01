import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, useTheme } from '@ui-kitten/components';

const CocktailHeader = ({ name }) => {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.header,
        { backgroundColor: theme['color-warning-default'] },
      ]}
    >
      <Text category='h2' style={styles.text}>
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
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CocktailHeader;
