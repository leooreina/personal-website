import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { saveContentRefs } from "../../features/page/pageSlice";
import { Section } from "../../interfaces/section";
import { ContentStyles } from "./styles";

interface ContentProps {
  menu: any;
  sectionSelected: Section;
}

export function Content({ menu, sectionSelected }: ContentProps) {
  const contentPages = useRef(new Array());
  const dispatch = useDispatch();

  useEffect(() => {
    const contentClone = {...contentPages};
    dispatch(saveContentRefs(contentClone));
  }, [])

  return (
    <ContentStyles>
      <div className="container">
        {menu.map((s: Section) => (
          <div id={`page-${s.id}`} className="page" ref={
            (element) => contentPages.current = [...contentPages.current, element]
          }>
            <div className="content">
              <h1>{s.label}</h1>
            </div>
          </div>
        ))}
      </div>
    </ContentStyles>
  )
}
