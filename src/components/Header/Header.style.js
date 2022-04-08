import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #ececec;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 15px;
    padding-bottom: 15px;
    font-size: 22px;
    color: black;

    a:not(:first-child) {
      padding-left: 15px;
      padding-right: 15px;
    }

    a:hover {
      color: gray;
    }
  }
`;
