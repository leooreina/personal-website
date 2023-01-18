import { useSelector } from "react-redux";
import { Content } from "./components/Content/Content";
import { Menu } from "./components/Menu/Menu";
import { selectMenu } from "./features/menu/menuSlice";
import { Section } from "./interfaces/section";
import { GlobalStyle } from "./styles/global";

export function App() {
  const menu = useSelector(selectMenu)
  const sectionSelected = menu.find((s: Section) => s.selected)

  return (
    <>
      <Content 
        sectionSelected={sectionSelected}
      />
      <Menu 
        menu={menu}
        sectionSelected={sectionSelected}
      />
      <GlobalStyle/>
    </>
  );
}