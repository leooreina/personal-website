import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  bottom: 0;
  position: fixed;
  width: 100%;
  height: 5rem;


  .menu-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  button {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--background);
    color: var(--text);
    border-radius: 0.25rem;
    border: 0;
    font-size: 1.2rem;

    transition: filter 0.5s;
  }

  .selected {
    color: var(--middle-blue);
  }
`