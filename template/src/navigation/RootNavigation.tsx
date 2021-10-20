import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootNavigationList, RootScreen } from '_/navigation';
import Home from '_/screens/Home';
import Second from '_/screens/Second';

const { Navigator, Screen } = createNativeStackNavigator<RootNavigationList>();

const SCREENS: RootScreen[] = [
  { name: 'Home', component: Home },
  { name: 'Second', component: Second },
];

const RootNavigation: React.FC = () => (
  <Navigator>
    {SCREENS.map(({ component, name, title, useTitle }) => (
      <Screen
        key={name}
        name={name}
        component={component}
        options={({ route }) => ({
          headerShown: !!title,
          title: useTitle && (route.params as any)?.title ? (route.params as any)?.title : title,
        })}
      />
    ))}
  </Navigator>
);

export default RootNavigation;
