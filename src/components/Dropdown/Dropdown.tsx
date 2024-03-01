import type { DropdownProps } from "./Dropdown.types";
import styled from "styled-components";

const StyledDropdown = styled.select`
  padding: 2px;
  border: 2px solid #138DDF;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

/**
 * A customizable dropdown component
 */
export const Dropdown = ({
  options,
  disabled = false,
  ...props
}: DropdownProps) => {
  return (
    <StyledDropdown
      disabled={disabled}
      {...props}
    >
      {options}
    </StyledDropdown>
  );
};
