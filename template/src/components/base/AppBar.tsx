import React from 'react';
import { StatusBar, StatusBarStyle } from 'react-native';

import useTheme from '_/hooks/useTheme';
import { MiscColors } from '_/utils/colors';

type Props = {
  barStyle?: StatusBarStyle;
  backgroundColor?: string;
};

/**
 * App bar serves as the application's status bar,
 * using the default background color to provide a more consistent look and feel of the application.
 */
const AppBar: React.FC<Props> = ({ backgroundColor, barStyle }) => {
  const { isDarkMode } = useTheme();
  const bar = barStyle ?? isDarkMode ? 'light-content' : 'dark-content';

  return <StatusBar barStyle={bar} backgroundColor={backgroundColor ?? MiscColors.primary} />;
};

export default AppBar;
