import styled from "styled-components";
import { Section } from "../../interfaces/section";

export const Container = styled.div<{ sectionSelected: Section }>`
  button {
    width: 100%;
    padding-top: 5px;
    height: 4rem;
    color: var(--text);
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
    border: 5px solid;
    border-top: none;
    border-left: none;
    border-right: none;
    padding-top: 10px;
  }
`;
