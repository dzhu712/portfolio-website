export type ImageProps = {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * What type of image to use
   */
  type?: 'primary' | 'small' | 'round';
  /**
   * What is the source of the image
   */
  src: string;
  /**
   * What does this image represent
   */
  alt: string;
  /**
   * Whether the image is disabled
   */
  disabled?: boolean;
};
