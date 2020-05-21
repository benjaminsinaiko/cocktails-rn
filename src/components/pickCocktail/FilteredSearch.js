import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';
import { Text, Icon, Button } from '@ui-kitten/components';

const GoIcon = props => {
  return <Icon {...props} name='arrow-circle-right-outline' />;
};

const FilteredSearch = ({ cocktails, spirits }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Filtered', {
      cocktails,
      spirits,
    });
  };

  return (
    <View style={styles.container}>
      <Text category='h5'>See Some Cocktials</Text>
      <Button
        style={styles.button}
        accessoryRight={GoIcon}
        appearance='ghost'
        size='giant'
        onPress={handlePress}
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

export default FilteredSearch;
