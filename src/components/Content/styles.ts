import styled from "styled-components";
import { Section } from "../../interfaces/section";

export const ContentStyles = styled.div<{ sectionSelected: Section }>`
  .container {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: ${(props) =>
      props.sectionSelected.selected
        ? `var(--background-${props.sectionSelected.label.toLowerCase()})`
        : `transparent`};
  }

  .pages {
    display: flex;
    box-sizing: border-box;
  }

  .page {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    transition: all 0.7s;
    color: black;
  }
`;
