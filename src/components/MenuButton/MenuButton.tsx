import { ButtonHTMLAttributes } from "react";

interface MenuButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  selected: boolean;
}

export function MenuButton({ label, selected, ...rest}: MenuButtonProps) {
  return (
    <button type="button" {...(selected && { className: 'selected' })} {...rest}>
      {label}
    </button>
  );
}