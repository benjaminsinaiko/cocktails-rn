import React from 'react';
import { Button, Icon } from '@ui-kitten/components';

import { useThemeContext } from '../../contexts/themeContext';

const ThemeToggleButton = () => {
  const { themeMode, toggleTheme } = useThemeContext();

  const ToggleIcon = props => (
    <Icon
      {...props}
      fill='#fff'
      name={themeMode === 'light' ? 'moon-outline' : 'sun-outline'}
    />
  );

  return (
    <Button
      appearance='ghost'
      accessoryLeft={ToggleIcon}
      style={{ margin: 2 }}
      onPress={toggleTheme}
    />
  );
};

export default ThemeToggleButton;
