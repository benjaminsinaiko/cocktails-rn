import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useTheme } from '@ui-kitten/components';

import { useAuth } from '../contexts/authContext';
import ListAlphaScreen from '../screens/ListAlphaScreen';
import ListGroupScreen from '../screens/ListGroupScreen';
import CocktailDetailScreen from '../screens/CocktailDetailScreen';

const DetailsStack = createStackNavigator();
const MainTabNav = createBottomTabNavigator();
const ListTab = createMaterialTopTabNavigator();

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

function ListTabNav() {
  const theme = useTheme();
  return (
    <ListTab.Navigator
      tabBarOptions={{
        activeTintColor: theme['color-primary-default'],
        inactiveTintColor: theme['color-primary-300'],
        indicatorStyle: {
          backgroundColor: theme['color-primary-default'],
        },
      }}
    >
      <ListTab.Screen name='By Category' component={ListGroupScreen} />
      <ListTab.Screen name='A - Z' component={ListAlphaScreen} />
    </ListTab.Navigator>
  );
}

function DetailsStackNav() {
  const theme = useTheme();
  return (
    <DetailsStack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: theme['color-primary-default'] },
      }}
    >
      <DetailsStack.Screen name='Cocktails' component={ListTabNav} />
      <DetailsStack.Screen name='Recipe' component={CocktailDetailScreen} />
    </DetailsStack.Navigator>
  );
}

export default function AppNavigator() {
  const { checkUserAuth } = useAuth();

  useEffect(() => {
    checkUserAuth();
  }, []);

  return (
    <NavigationContainer>
      <MainTabNav.Navigator>
        <MainTabNav.Screen name='Home' component={DetailsStackNav} />
        <MainTabNav.Screen name='Profile' component={ProfileScreen} />
      </MainTabNav.Navigator>
    </NavigationContainer>
  );
}
