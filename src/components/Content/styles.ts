import styled from "styled-components";

export const ContentStyles = styled.div`
  .container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  .page {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--ease-green);

    width: 100%;
    height: 100vh;
  }

  #page-1 {
    background: var(--background-about);
    position: absolute;
    left: -100%;
    transition: transform 2s ease-in-out;
  }

  #page-2 {
    background: var(--background-home);
    position: absolute;
    left: 0;
    transition: transform 2s ease-in-out;
  }

  #page-3 {
    background: var(--background-work);
    position: absolute;
    left: 100%;
    transition: transform 2s ease-in-out;
  }
`;
