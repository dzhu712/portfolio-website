import { ReactElement } from 'react';
import { Image } from '../Image';
import { Text } from '../Text';
import { Button } from '../Button';

export type HeroProps = {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * What is the source of the image
   */
  src: string;
  /**
   * Text contents
   */
  text?: ReactElement<typeof Text> | ReactElement<typeof Text>[];
  /**
   * Button component
   */
  button?: ReactElement<typeof Button>;
  /**
   * Whether the hero is disabled
   */
  disabled?: boolean;
};
