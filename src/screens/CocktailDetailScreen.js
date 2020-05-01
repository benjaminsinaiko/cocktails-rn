import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
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
import CocktailType from '../components/cocktailDetails/CocktailType';
import CocktailAttributes from '../components/cocktailDetails/CocktailAttributes';
import CocktailIngredients from '../components/cocktailDetails/CocktailIngredients';
import CocktailGarnish from '../components/cocktailDetails/CocktailsGarnish';
import sampleCocktails from '../utils/sampleCocktails.json';

const CocktailDetailScreen = ({ route }) => {
  const theme = useTheme();
  const {
    state: { cocktails },
  } = useCocktails();
  const { cocktailId } = route.params;
  const [cocktail, setCocktail] = useState(null);
  // console.log('route params', cocktailId);
  // console.log('cocktails', cocktails);

  useEffect(() => {
    const cocktailData = cocktails.find(cocktail => cocktail.id === cocktailId);
    setCocktail(cocktailData);
  }, [cocktails]);

  return (
    <Layout
      style={[
        styles.container,
        { backgroundColor: theme['color-warning-200'] },
      ]}
    >
      <View style={styles.cardView}>
        {!cocktail ? (
          <Spinner size='large' status='warning' />
        ) : (
          <>
            <CocktailHeader name={cocktail.name} />

            <CocktailGlass glass={cocktail.glass.toLowerCase()} />

            <CocktailType type={cocktail.type} />

            <Divider
              style={[
                styles.divider,
                {
                  width: '45%',
                  marginTop: 10,
                  borderColor: theme['color-warning-200'],
                },
              ]}
            />

            <CocktailAttributes cocktail={cocktail} />

            <Divider
              style={[
                styles.smallDivider,
                { borderColor: theme['color-warning-200'] },
              ]}
            />

            <CocktailIngredients ingredients={cocktail.ingredients} />

            <Divider
              style={[
                styles.smallDivider,
                { borderColor: theme['color-warning-200'] },
              ]}
            />

            <CocktailGarnish garnish={cocktail.garnish} />

            <Icon
              name='arrow-up-outline'
              fill={theme['color-warning-default']}
              style={{ width: 30, height: 30 }}
            />
          </>
        )}
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  cardView: {
    width: '90%',
    minHeight: '60%',
    marginTop: 35,
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
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
