export type InputProps = {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * Id of the input
  */
  id: string;
  /**
   * Name of the input
  */
  name: string;
  /**
   * What type of input to use
  */
  type?: 'text' | 'email' | 'textarea';
  /**
   * Describe the expected input
   */
  placeholder: string;
  /**
   * Whether the input is disabled
   */
  disabled?: boolean;
};
