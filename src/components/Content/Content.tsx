import { Section } from "../../interfaces/section";
import { ContentStyles } from "./styles";

interface ContentProps {
  sectionSelected: Section;
}

export function Content({ sectionSelected }: ContentProps) {
  return (
    <ContentStyles sectionSelected={sectionSelected}>
      <div className="container">
        <div className="pages">
          <div className="page">
            <h1>{sectionSelected.label}</h1>
          </div>
        </div>
      </div>
    </ContentStyles>
  )
}
