import React, { useState } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import { AuthProvider } from './src/contexts/authContext';
import { CocktailsProvider } from './src/contexts/cocktailsContext';
import { ThemeProvider, useThemeContext } from './src/contexts/themeContext';
import { default as myTheme } from './src/utils/theme.json';

import AppNavigator from './src/navigation/AppNavigator';

function AppThemeProvider() {
  const { themeMode } = useThemeContext();
  return (
    <ApplicationProvider {...eva} theme={{ ...eva[themeMode], ...myTheme }}>
      <AppNavigator />
    </ApplicationProvider>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <CocktailsProvider>
        <IconRegistry icons={EvaIconsPack} />
        <ThemeProvider>
          <AppThemeProvider />
        </ThemeProvider>
      </CocktailsProvider>
    </AuthProvider>
  );
}
