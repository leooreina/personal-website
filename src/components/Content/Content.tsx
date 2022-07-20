import { useEffect, useRef, useState } from "react";
import { Section } from "../../interfaces/section";
import { ContentStyles } from "./styles";

interface ContentProps {
  sections: Section[];
  selectedSectionId: number;
}

export function Content({sections, selectedSectionId}: ContentProps) {
  const [currentSection, setCurrentSection] = useState<Section | undefined>(undefined)
  const [prevSelected, setPrevSelected] = useState<Number | undefined>(undefined)

  // const containerRef = useRef<HTMLDivElement>(null);
  const pagesRef = useRef<Array<HTMLDivElement | null>>([])

  function handlePrevSelected() {
    const currentSelected = selectedSectionId;
    if (prevSelected && prevSelected !== currentSelected) {
      // containerRef.current?.classList.toggle('container-view')

      // containerRef.current?.classList.remove('prev-active-1', 'prev-active-2', 'prev-active-3')
      // containerRef.current?.classList.remove('active-1', 'active-2', 'active-3')
      // containerRef.current?.classList.add(`prev-active-${prevSelected}`)
      // containerRef.current?.classList.add(`active-${currentSelected}`)

      // console.log(containerRef.current);
    }
  }

  // useEffect(() => {
  //   setPrevSelected(currentSection?.id)
  // }, [currentSection])

  function handleNavigation(direction: string) {
    const translateAmount = 100;
    let translate = 0;

    direction === "next" ? translate -= translateAmount : translate += translateAmount;

    pagesRef.current.forEach((page) => {
      if (page)
        page.style.transform = `translateX${translate}%`;
    });
  }

  useEffect(() => {
    const section = sections[sections.findIndex(sec => sec.id === selectedSectionId)]
    setCurrentSection(section)
    // if (currentSection) handlePrevSelected()
  }, [selectedSectionId])

  useEffect(() => {
    pagesRef.current = pagesRef.current.slice(0, sections.length);
 }, [sections]);

  return (
    <ContentStyles>
      <div className="container">
        <div className="pages">
          {sections.map((section, index) => (
            <div
              key={index}
              className="page"
              ref={element => pagesRef.current[index] = element}
            >
              <h1>{section.label}</h1>
            </div>
          ))}
        </div>
      </div>
    </ContentStyles>
  )
}
