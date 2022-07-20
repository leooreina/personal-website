import styled from "styled-components";

export const ContentStyles = styled.div`
  .container {
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  .pages {
    display: flex;
    width: 300%;
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
`