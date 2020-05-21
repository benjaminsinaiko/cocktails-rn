import React, { useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Icon } from '@ui-kitten/components';

const pickRandom = cocktailsArray => {
  return cocktailsArray[Math.floor(Math.random() * cocktailsArray.length)];
};

const PickRandomCocktail = ({ filteredCocktails }) => {
  const navigation = useNavigation();
  const iconRef = useRef();

  const renderGoIcon = props => {
    return (
      <Icon {...props} ref={iconRef} name='question-mark-circle-outline' />
    );
  };

  const handlePress = () => {
    const randomCocktail = pickRandom(filteredCocktails);

    iconRef.current.startAnimation();

    setTimeout(() => {
      navigation.navigate('Recipe', {
        cocktailId: randomCocktail.id,
      });
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <Text category='h4'>Just Get After It</Text>
      <Button
        onPress={handlePress}
        style={styles.button}
        accessoryRight={renderGoIcon}
        appearance='ghost'
        size='giant'
      >
        Pick Random
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 30,
  },
  button: {
    marginTop: 15,
  },
});

export default PickRandomCocktail;
