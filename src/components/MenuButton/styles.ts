import styled from "styled-components";
import { Section } from "../../interfaces/section";

export const Container = styled.div<{ sectionSelected: Section }>`
  button {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    color: var(--text);
    border-radius: 0.25rem;
    border: 0;
    font-size: 1.2rem;
    background: ${(props) =>
      props.sectionSelected.selected
        ? `var(--background-${props.sectionSelected.label.toLowerCase()})`
        : `transparent`};

    transition: filter 0.5s;
  }

  .selected {
    color: var(--ease-green);
  }
`;
