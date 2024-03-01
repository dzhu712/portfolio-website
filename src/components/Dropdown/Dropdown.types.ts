import React from "react";

export type OptionProps = {
  /**
   * Option content
   */
  label: string;
  /**
   * Option value
   */
  value: string;
};

export type DropdownProps = {
  /**
   * Options in the dropdown
   */
  options: React.ReactElement<OptionProps, 'option'>[];
  /**
   * Whether the text is disabled
   */
  disabled?: boolean;
};
