import React, { useEffect } from 'react';
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
import Profile from '../screens/Profile';
import FilteredCocktails from '../screens/FilteredCocktails';
import CocktailDetailScreen from '../screens/CocktailDetailScreen';
import ThemeToggleButton from '../components/common/ThemeToggleButton';

const CocktailsStack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();
const TopTabs = createMaterialTopTabNavigator();

function getHeaderTitle(route) {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params?.screen || "5 O'Clocktail";

  switch (routeName) {
    case 'Find':
      return "5 O'Clocktails";
    case 'Cocktails':
      return 'Cocktails';
    case 'Profile':
      return 'Profile';

    default:
      "5 O'Clocktails";
  }
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
      <TopTabs.Screen
        name='Alpha'
        component={ListAlphaTab}
        options={{ title: 'A - Z' }}
      />
      <TopTabs.Screen
        name='Group'
        component={ListGroupTab}
        options={{ title: 'Spirit Type' }}
      />
    </TopTabs.Navigator>
  );
}

function HomeTabsNav({}) {
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
        name='Find'
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
        component={Profile}
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
          headerTintColor: '#fff',
          headerStyle: { backgroundColor: theme['color-primary-default'] },
          headerTitleAlign: 'center',
          headerRight: () => <ThemeToggleButton />,
        }}
      >
        <CocktailsStack.Screen
          name='Home'
          component={HomeTabsNav}
          options={({ route }) => ({
            headerTitle: getHeaderTitle(route),
          })}
        />
        <CocktailsStack.Screen
          name='Filtered'
          component={FilteredCocktails}
          options={{
            headerBackTitle: 'Back',
          }}
        />
        <CocktailsStack.Screen
          name='Recipe'
          component={CocktailDetailScreen}
          options={{
            title: null,
            headerBackTitleVisible: false,
            headerTransparent: true,
          }}
        />
      </CocktailsStack.Navigator>
    </NavigationContainer>
  );
}
