import React from 'react';
import { Button, Icon } from '@ui-kitten/components';

import { useTheme } from '../../contexts/themeContext';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  const ToggleIcon = props => (
    <Icon
      {...props}
      fill='#fff'
      name={theme === 'light' ? 'moon-outline' : 'sun-outline'}
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
