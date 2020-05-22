import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Text, Layout, Avatar, useTheme } from '@ui-kitten/components';

import margaritaImg from '../icons/margarita.png';

const Profile = () => {
  const theme = useTheme();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={styles.container}>
        <Avatar
          source={margaritaImg}
          style={[
            styles.avatar,
            {
              backgroundColor: theme['background-basic-color-3'],
              tintColor: theme['color-primary-default'],
            },
          ]}
        />
        <Text category='h5'>Profile Page...</Text>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 25,
  },
  avatar: {
    width: 130,
    height: 130,
    marginVertical: 40,
  },
});

export default Profile;
