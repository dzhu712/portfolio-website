import React, { ReactElement, cloneElement } from "react";
import type { HeroProps } from "./Hero.types";
import styled, { css } from "styled-components";

const StyledHero = styled.div<{ $src: string; $disabled?: boolean; }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  aspect-ratio: 16/9;
  text-align: center;
  padding: 40px 12px;
  box-sizing: border-box;

  ${props => props.$src && css`
    background-image: url(${props.$src});
    background-position: center;
    background-size: cover;
  `}

  ${props => props.$disabled && css`
    opacity: 0.5;
    cursor: not-allowed;
  `}
`;

/**
 * A customizable hero component
 */
export const Hero = ({
  backgroundColor,
  src,
  text,
  button,
  disabled = false,
  ...props
}: HeroProps) => {
  const disabledButton = cloneElement(button as ReactElement, { disabled: true });

  return (
    <StyledHero
      style={{ backgroundColor }}
      $src={src}
      $disabled={disabled}
      {...props}
    >
      {text}
      <span style={{ margin: "20px" }} />
      {disabled ? disabledButton : button}
    </StyledHero>
  );
};
