import { Section } from "../../interfaces/section"
import { MenuButton } from "../MenuButton/MenuButton";
import { Container } from "./styles"

interface MenuProps {
  sections: Section[];
  handleClickButton: (id: number) => void;
  selectedSectionId: number;
}

export function Menu({ sections, handleClickButton, selectedSectionId }: MenuProps) {
  return (
    <Container>
      <div className="menu-grid">
        {sections.map((section) => (
          <MenuButton
            key={String(section.id)}
            label={section.label}
            onClick={() => handleClickButton(section.id)}
            selected={selectedSectionId === section.id}
          />
        ))}
      </div>
    </Container>
  )
}