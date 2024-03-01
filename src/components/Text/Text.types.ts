export type TextProps = {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * What text color to use
   */
  color?: string;
  /**
   * Text contents
   */
  label: string;
  /**
   * How large should the text be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Whether the text is bold
   */
  bold?: boolean;
  /**
   * Whether the text is disabled
   */
  disabled?: boolean;
};
