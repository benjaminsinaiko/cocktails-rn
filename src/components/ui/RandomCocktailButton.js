import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@ui-kitten/components';
import { FontAwesome5 } from '@expo/vector-icons';

import useRandomCocktail from '../../hooks/useRandomCocktail';

function RandomCocktailButton() {
  const pickRandomId = useRandomCocktail();
  const navigation = useNavigation();

  function RandomIcon() {
    return <FontAwesome5 name='random' size={24} color='#fff' />;
  }

  return (
    <Button
      onPress={() =>
        navigation.navigate('Recipe', {
          cocktailId: pickRandomId(),
        })
      }
      accessoryLeft={RandomIcon}
    >
      Pick Random Cocktail
    </Button>
  );
}

export default RandomCocktailButton;
