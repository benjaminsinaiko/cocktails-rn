import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '@ui-kitten/components';

const SpiritCountDisplay = ({ total, selected }) => {
  return (
    <View style={styles.container}>
      <Text category='h1'>{selected === total ? 'All' : selected}</Text>
      <Text>
        <Text category='s1' appearance='hint'>
          spirits selected
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SpiritCountDisplay;
