import type { TextProps } from "./Text.types";
import styled, { css } from "styled-components";

const sizeDesktopMapping = {
  small: '20px',
  medium: '36px',
  large: '64px',
};

const sizeMobileMapping = {
  small: '20px',
  medium: '32px',
  large: '40px',
};

const findSize = (mapping: object, size: string) => Object.entries(mapping).find(item => item[0] === size)?.[1] || size;

const StyledText = styled.p<{ $size?: string; $bold?: boolean; $disabled?: boolean; }>`
  ${props => props.$size && css`
    font-size: ${findSize(sizeDesktopMapping, props.$size)};
  `}

  ${props => props.$bold && css`
    font-weight: bold;
  `}

  ${props => props.$disabled && css`
    opacity: 0.5;
    cursor: not-allowed;
  `}

  @media screen and (max-width: 600px) {
    ${props => props.$size && css`
      font-size: ${findSize(sizeMobileMapping, props.$size)};
    `}
  }
`;

/**
 * A customizable text component
 */
export const Text = ({
  backgroundColor = "transparent",
  color = "black",
  label,
  size = "small",
  bold = false,
  disabled = false,
  ...props
}: TextProps) => {
  return (
    <StyledText
      style={{ backgroundColor, color }}
      $size={size}
      $bold={bold}
      $disabled={disabled}
      {...props}
    >
      {label}
    </StyledText>
  );
};
