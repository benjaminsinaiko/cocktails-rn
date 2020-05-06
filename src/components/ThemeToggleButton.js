import React from 'react';
import { Button, Icon } from '@ui-kitten/components';

import { useTheme } from '../contexts/themeContext';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  console.log('theme', theme);

  const ToggleIcon = props => (
    <Icon
      {...props}
      name={theme === 'light' ? 'moon-outline' : 'sun-outline'}
    />
  );

  return <Button accessoryLeft={ToggleIcon} onPress={toggleTheme} />;
};

export default ThemeToggleButton;
