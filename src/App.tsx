import { useState } from "react";
import { Content } from "./components/Content/Content";
import { Menu } from "./components/Menu/Menu";
import { Section } from "./interfaces/section";
import { GlobalStyle } from "./styles/global";

export function App() {
  const sections: Section[] = [
    { id: 1, label: 'About' },
    { id: 2, label: 'Home' },
    { id: 3, label: 'Work' }
  ]

  const [selectedSectionId, setSelectedSectionId] = useState(2)

  function handleClickButton(id: number): void {
    setSelectedSectionId(id)
  }

  return (
    <>
      <Content
        sections={sections}
        selectedSectionId={selectedSectionId}
      />
      <Menu 
        sections={sections}
        handleClickButton={handleClickButton}
        selectedSectionId={selectedSectionId}
      />
      <GlobalStyle/>
    </>
  );
}