import React from 'react';
import { Dimensions, Text, TextProps } from 'react-native';

import useTheme from '_/hooks/useTheme';

type Props = TextProps & {
  textColor?: string;

  /**
   * Specify the fontSize as a number and it will automatically scale to fit smaller screens
   * It is strongly recommended to use numbers divisible by 16 as the base font size is 16px
   */
  fontSize?: number;

  type?: 'primary' | 'secondary';

  fontFamily?: 'default' | 'system';
};

const { fontScale: FONT_SCALE } = Dimensions.get('window');

/**
 * Theme- and font-aware `Text` component.
 * Allows us to specify the type of text, whether primary or secondary
 */
const Label: React.FC<Props> = ({ textColor, type, ...props }) => {
  const { colors } = useTheme();

  const color = textColor ?? type == 'secondary' ? colors.textSecondary : colors.textPrimary;
  const fontSize = (props.fontSize ?? 16) * FONT_SCALE;

  return <Text {...props} style={[{ color, fontSize }, props.style]} />;
};

export default Label;
