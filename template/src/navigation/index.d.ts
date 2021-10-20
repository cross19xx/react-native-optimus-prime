import { ComponentClass, FC } from 'react';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

/**
 * Lists out all the screens used in the application.
 * Each screen comes with the route props that must be passed to it. For screens with no route prop,
 * `undefined` can be passed to it
 *
 * See https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */
export type RootNavigationList = {
  Home: undefined;
  Second: undefined;
};

export type RootNavigationName = keyof RootNavigationList;

/** Passed as the type definition for `useNavigation` hook */
export type RootNavigationProp<T extends RootNavigationName> = NativeStackNavigationProp<
  RootNavigationList,
  T
>;

/** Passed as the type definition for `useRoute` hook */
export type RootNavigationRouteProp<T extends RootNavigationName> = RouteProp<
  RootNavigationList,
  T
>;

/** Root screen defines the components passed to a Screen object */
type RootScreen = {
  name: RootNavigationName;
  component: FC | ComponentClass;

  /** @requires useTitleParam */
  title?: string;

  /**
   * Once specified, uses the app bar. The title either becomes the title specified or the
   * navigation screen name
   */
  useTitle?: boolean;
};
