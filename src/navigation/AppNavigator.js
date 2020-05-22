import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useTheme } from '@ui-kitten/components';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useAuth } from '../contexts/authContext';
import FiveOClocktail from '../screens/FiveOClocktail';
import ListAlphaTab from '../screens/ListAlphaTab';
import ListGroupTab from '../screens/ListGroupTab';
import FilteredCocktails from '../screens/FilteredCocktails';
import CocktailDetailScreen from '../screens/CocktailDetailScreen';
import ThemeToggleButton from '../components/common/ThemeToggleButton';

const CocktailsStack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();
const TopTabs = createMaterialTopTabNavigator();

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

function TopTabsNav() {
  const theme = useTheme();

  return (
    <TopTabs.Navigator
      tabBarOptions={{
        activeTintColor: theme['color-primary-default'],
        inactiveTintColor: theme['color-primary-400'],
        indicatorStyle: {
          backgroundColor: theme['color-primary-default'],
        },
        style: {
          backgroundColor: theme['background-basic-color-1'],
        },
      }}
    >
      <TopTabs.Screen name='A - Z' component={ListAlphaTab} />
      <TopTabs.Screen name='By Type' component={ListGroupTab} />
    </TopTabs.Navigator>
  );
}

function HomeTabsNav() {
  const theme = useTheme();

  return (
    <BottomTabs.Navigator
      tabBarOptions={{
        showIcon: true,
        activeTintColor: theme['color-primary-default'],
        style: {
          backgroundColor: theme['background-basic-color-1'],
          borderTopWidth: 0,
        },
      }}
    >
      <BottomTabs.Screen
        name="O'Clocktail"
        component={FiveOClocktail}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='numeric-5-box-multiple-outline'
              size={size}
              color={color}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name='Cocktails'
        component={TopTabsNav}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name='drink' size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name='user' size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function AppNavigator() {
  const { checkUserAuth } = useAuth();
  const theme = useTheme();

  useEffect(() => {
    checkUserAuth();
  }, []);

  return (
    <NavigationContainer>
      <CocktailsStack.Navigator
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: theme['color-primary-default'] },
          headerTitleAlign: 'center',
          headerRight: () => <ThemeToggleButton />,
        }}
      >
        <CocktailsStack.Screen name='FiveOClocktail' component={HomeTabsNav} />
        <CocktailsStack.Screen name='Filtered' component={FilteredCocktails} />
        <CocktailsStack.Screen name='Recipe' component={CocktailDetailScreen} />
      </CocktailsStack.Navigator>
    </NavigationContainer>
  );
}
