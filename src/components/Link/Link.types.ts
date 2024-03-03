export type LinkProps = {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * Where does the link goes to
   */
  href: string;
  /**
   * Link contents
   */
  label: string;
  /**
   * Whether the link is large
   */
  large?: boolean;
  /**
   * Whether the link is blue
   */
  blue?: boolean;
  /**
   * Whether the link is bold
   */
  bold?: boolean;
  /**
   * Whether the link is disabled
   */
  disabled?: boolean;
};
