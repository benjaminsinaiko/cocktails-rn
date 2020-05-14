import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import {
  Layout,
  Divider,
  Icon,
  Spinner,
  useTheme,
} from '@ui-kitten/components';

import { useCocktails } from '../contexts/cocktailsContext';
import CocktailHeader from '../components/cocktailDetails/CocktailHeader';
import CocktailGlass from '../components/cocktailDetails/CocktailGlass';
import CocktailAttributes from '../components/cocktailDetails/CocktailAttributes';
import CocktailIngredients from '../components/cocktailDetails/CocktailIngredients';
import CocktailGarnish from '../components/cocktailDetails/CocktailsGarnish';

const CocktailDetailScreen = ({ route }) => {
  const theme = useTheme();
  const { state } = useCocktails();
  const { cocktails } = state;
  const { cocktailId } = route.params;
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    const cocktailData = cocktails.find(cocktail => cocktail.id === cocktailId);
    setCocktail(cocktailData);
  }, [cocktails]);

  return (
    <Layout style={styles.container}>
      {!cocktail ? (
        <Spinner size='large' />
      ) : (
        <>
          <CocktailHeader name={cocktail.name} type={cocktail.type} />

          <CocktailGlass glassName={cocktail.glass.toLowerCase()} />

          <Divider
            style={[
              styles.divider,
              {
                width: '45%',
                marginTop: 10,
                borderColor: theme['color-primary-200'],
              },
            ]}
          />

          <CocktailAttributes cocktail={cocktail} />

          <Divider
            style={[
              styles.smallDivider,
              { borderColor: theme['color-primary-200'] },
            ]}
          />

          <CocktailIngredients ingredients={cocktail.ingredients} />

          <Divider
            style={[
              styles.smallDivider,
              { borderColor: theme['color-primary-200'] },
            ]}
          />

          <CocktailGarnish garnish={cocktail.garnish} />

          <Icon
            name='arrow-up-outline'
            fill={theme['color-primary-default']}
            style={{ width: 30, height: 30 }}
          />
        </>
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  divider: {
    borderWidth: 1,
  },
  smallDivider: {
    borderWidth: 1,
    width: '15%',
    marginBottom: 20,
  },
});

export default CocktailDetailScreen;
