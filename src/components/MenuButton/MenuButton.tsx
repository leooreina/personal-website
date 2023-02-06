import { ButtonHTMLAttributes } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSectionSelected } from "../../features/menu/menuSlice";
import { callSlideAnimation, selectPages } from "../../features/page/pageSlice";
import { Section } from "../../interfaces/section";
import { Container } from "./styles";

interface MenuButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  menu: Section[];
  section: Section
}

export function MenuButton({ menu, section }: MenuButtonProps) {
  const dispatch = useDispatch();
  const contentPages = useSelector(selectPages);

  const clickActions = () => {
    const currentSectionIndex = menu.findIndex((option: Section) => option.id === section.id);
    const previousSectionIndex = menu.findIndex((option: Section) => option.selected);

    const currentSectionId = menu[currentSectionIndex].id;
    const previousSectionId = menu[previousSectionIndex].id;

    dispatch(changeSectionSelected({ currentSectionIndex, previousSectionIndex }))
    // dispatch(callSlideAnimation({ currentSectionId, previousSectionId }))
    console.log(contentPages);
  }

  return (
      <Container sectionSelected={section}>
        <button
          type="button"
          {...(section.selected && { className: 'selected' })}
          onClick={clickActions}
        >
          {section.label}
        </button>
      </Container>
  );
}