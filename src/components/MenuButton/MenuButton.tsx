import { ButtonHTMLAttributes } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeMenu } from "../../features/menu/menuSlice";
import { Section } from "../../interfaces/section";

interface MenuButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  section: Section
}

export function MenuButton({ section }: MenuButtonProps) {
  const menu = useSelector((state: any) => state.menu.value)
  const dispatch = useDispatch();

  const changeMenuSelection = () => {
    const currentSelection: Section = menu.find((option: Section) => option.selected === true)
    const newSelection: Section = menu.find((option: Section) => option.label === section.label)
    const rest: Section[] = menu.filter((option: Section) => option.label !== section.label && option.selected !== true);
    return [...rest, {...currentSelection, selected: false}, {...newSelection, selected: true }
    ].flat().sort((a, b) => a.id - b.id);
  }

  return (
    <button 
      type="button" {...(section.selected && { className: 'selected' })}
      onClick={() => dispatch(changeMenu(changeMenuSelection()))}
    >
      {section.label}
    </button>
  );
}