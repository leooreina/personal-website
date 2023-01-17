import { useSelector } from "react-redux";
import { MenuButton } from "../MenuButton/MenuButton";
import { Container } from "./styles"

export function Menu() {
  const menu = useSelector((state: any) => state.menu.value)

  return (
    <Container>
      <div className="menu-grid">
        {menu.map((section: any) => (
          <MenuButton section={section} />
        ))}
      </div>
    </Container>
  )
}