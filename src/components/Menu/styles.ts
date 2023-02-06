import styled from "styled-components";
import { Section } from "../../interfaces/section";

export const Container = styled.div<{ sectionSelected: Section }>`
  display: flex;
  align-items: center;
  justify-content: center;

  bottom: 0;
  position: fixed;
  width: 100%;
  height: 5rem;

  background: ${(props) =>
    props.sectionSelected.selected
      ? `var(--background-${props.sectionSelected.label.toLowerCase()})`
      : `transparent`};

  .menu-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3rem;
  }
`;
