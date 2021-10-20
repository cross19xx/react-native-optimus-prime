import React from 'react';
import { NavigationContainer, Theme, useTheme as useNativeTheme } from '@react-navigation/native';

import AppBar from '_/components/base/AppBar';
import RootNavigation from '_/navigation/RootNavigation';
import useTheme from '_/hooks/useTheme';
import { MiscColors } from '_/utils/colors';

export * from './index.d';

const Navigation: React.FC = ({ children }) => {
  // Override the react navigation theme colors
  const { colors } = useTheme();
  const { dark, colors: nativeColors } = useNativeTheme();

  const theme: Theme = {
    dark,
    colors: {
      ...nativeColors,
      background: colors.background,
      text: colors.textPrimary,
      card: colors.backgroundSecondary,
      primary: MiscColors.primary,
    },
  };

  return (
    <NavigationContainer theme={theme}>
      <AppBar />
      <RootNavigation />
      {children}
    </NavigationContainer>
  );
};

export default Navigation;
