import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Avatar, useTheme } from '@ui-kitten/components';

import getGlassIcon from '../../utils/getGlassIcon';

const CocktailGlass = ({ glassName }) => {
  const theme = useTheme();

  return (
    <Layout style={styles.container}>
      <Avatar
        style={{
          flex: 1,
          width: '100%',
          tintColor: theme['color-primary-default'],
        }}
        source={getGlassIcon(glassName)}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'center',
    width: 75,
    height: 75,
  },
});

export default CocktailGlass;
