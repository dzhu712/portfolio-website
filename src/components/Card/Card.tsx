import React from "react";
import type { CardProps } from "./Card.types";
import styled, { css } from "styled-components";

const StyledCard = styled.div<{ $secondary?: boolean; $disabled?: boolean; }>`
  display: flex;
  align-items: center;
  max-width: 900px;
  gap: 20px;
  padding: 40px;
  box-sizing: border-box;

  & p {
    max-width: 400px;
  }

  ${props => props.$secondary && css`
    flex-direction: row-reverse;
  `}

  ${props => props.$disabled && css`
    opacity: 0.5;
    cursor: not-allowed;
  `}

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

/**
 * A customizable card component
 */
export const Card = ({
  backgroundColor,
  image,
  title,
  description,
  secondary = false,
  disabled = false,
  ...props
}: CardProps) => {
  return (
    <StyledCard
      style={{ backgroundColor }}
      $secondary={secondary}
      $disabled={disabled}
      {...props}
    >
      {image}
      <div>
        {title}
        {description}
      </div>
    </StyledCard>
  );
};
