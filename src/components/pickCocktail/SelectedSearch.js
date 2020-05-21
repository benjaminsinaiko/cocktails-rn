import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Icon, Button } from '@ui-kitten/components';

const GoIcon = props => {
  return <Icon {...props} name='arrow-circle-right-outline' />;
};

const SelectedSearch = ({ filteredCocktails }) => {
  return (
    <View style={styles.container}>
      <Text category='h5'>See Some Cocktials</Text>
      <Button
        style={styles.button}
        accessoryRight={GoIcon}
        appearance='ghost'
        size='giant'
      >
        Search
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 30,
  },
  button: {
    marginVertical: 15,
  },
});

export default SelectedSearch;
