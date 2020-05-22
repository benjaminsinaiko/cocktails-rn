import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const FullPageSpinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color='#B67FFF' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222B45',
  },
});

export default FullPageSpinner;
