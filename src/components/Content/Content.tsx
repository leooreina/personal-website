import { useSelector } from "react-redux";
import { Section } from "../../interfaces/section";
import { ContentStyles } from "./styles";

export function Content() {
  const menu = useSelector((state: any) => state.menu.value)
  const contentSelected = menu.find((section: Section) => section.selected);

  return (
    <ContentStyles>
      <div className="container">
        <div className="pages">
          <div className="page">
            <h1>{contentSelected.label}</h1>
          </div>
        </div>
      </div>
    </ContentStyles>
  )
}
