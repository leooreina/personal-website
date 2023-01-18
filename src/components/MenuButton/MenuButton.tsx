import { ButtonHTMLAttributes } from "react";
import { useDispatch } from "react-redux";
import { changeMenu } from "../../features/menu/menuSlice";
import { Section } from "../../interfaces/section";
import { Container } from "./styles";

interface MenuButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  menu: any;
  section: Section
}

export function MenuButton({ menu, section }: MenuButtonProps) {
  const dispatch = useDispatch();

  return (
      <Container sectionSelected={section}>
        <button
          type="button" 
          {...(section.selected && { className: 'selected' })}
          onClick={() => dispatch(changeMenu({
            currentSelected: menu.findIndex((option: Section) => option.label === section.label),
            previousSelected: menu.findIndex((option: Section) => option.selected === true)
          }))}
        >
          {section.label}
        </button>
      </Container>
  );
}