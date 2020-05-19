import React, { useRef } from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Icon } from '@ui-kitten/components';

import useRandomCocktail from '../../hooks/useRandomCocktail';

function RandomCocktailButton() {
  const pickRandomId = useRandomCocktail();
  const navigation = useNavigation();
  const questionIconRef = useRef();

  function renderZoomQuestionIcon(props) {
    return (
      <Icon
        {...props}
        ref={questionIconRef}
        style={styles.button}
        animationConfig={{ duration: 250, cycles: 2 }}
        animation='pulse'
        name='question-mark-outline'
      />
    );
  }

  async function handlePress() {
    await questionIconRef.current.startAnimation();
    setTimeout(() => {
      navigation.navigate('Recipe', { cocktailId: pickRandomId() });
    }, 1000);
  }

  return (
    <Button
      onPress={handlePress}
      accessoryLeft={renderZoomQuestionIcon}
    ></Button>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 125,
    height: 75,
  },
});

export default RandomCocktailButton;
