import { Section } from "../../interfaces/section";
import { MenuButton } from "../MenuButton/MenuButton";
import { Container } from "./styles"

interface MenuProps {
  menu: any;
  sectionSelected: Section; 
}

export function Menu({ menu, sectionSelected }: MenuProps) {
  return (
    <Container sectionSelected={sectionSelected}>
      <div className="menu-grid">
        {menu.map((section: Section) => (
          <MenuButton
            menu={menu}
            section={section} 
          />
        ))}
      </div>
    </Container>
  )
}