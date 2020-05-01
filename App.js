import React, { useEffect } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthProvider, useAuth } from './src/contexts/authContext';
import { CocktailsProvider } from './src/contexts/cocktailsContext';
import CocktailsListScreen from './src/screens/CocktailListScreen';
import CocktailDetailScreen from './src/screens/CocktailDetailScreen';

const Stack = createStackNavigator();

function AppNavigator() {
  const { checkUserAuth } = useAuth();

  useEffect(() => {
    checkUserAuth();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='All Cocktails' component={CocktailsListScreen} />
        <Stack.Screen
          name='Cocktail'
          component={CocktailDetailScreen}
          options={{ title: 'Recipe' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <AuthProvider>
        <CocktailsProvider>
          <IconRegistry icons={EvaIconsPack} />
          <ApplicationProvider {...eva} theme={eva.light}>
            <AppNavigator />
          </ApplicationProvider>
        </CocktailsProvider>
      </AuthProvider>
    </>
  );
}
