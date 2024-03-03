import { ReactElement } from 'react';
import { Image } from '../Image';
import { Text } from '../Text';

export type CardProps = {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * Image component
   */
  image: ReactElement<typeof Image>;
  /**
   * Text contents
   */
  title: ReactElement<typeof Text>;
  /**
   * Button component
   */
  description: ReactElement<typeof Text>;
  /**
   * Whether the card is secondary
   */
  secondary?: boolean;
  /**
   * Whether the card is disabled
   */
  disabled?: boolean;
};
