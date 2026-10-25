"use client";

import { Checkbox } from "@/components/ui/checkbox";

interface IndeterminateCheckboxProps {
  checked: boolean;
  indeterminate?: boolean;
  onCheckedChange: (checked: boolean) => void;
  "aria-label": string;
}

export function IndeterminateCheckbox({
  checked,
  indeterminate = false,
  onCheckedChange,
  "aria-label": ariaLabel,
}: IndeterminateCheckboxProps) {
  return (
    <Checkbox
      checked={checked}
      indeterminate={indeterminate}
      onCheckedChange={(value) => onCheckedChange(value === true)}
      aria-label={ariaLabel}
    />
  );
}
