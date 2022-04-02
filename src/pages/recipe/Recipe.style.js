import styled from "styled-components";

const StyledRecipe = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  h2 {
    font-size: 48px;
    text-align: center;
    margin-top: 16px;
    margin-bottom: 16px;
  }

  .time {
    font-weight: 900;
  }
  .method {
    font-size: 18px;
    line-height: 1.3;
    padding-top: 16px;
    padding-bottom: 16px;
  }

  .ingredients {
    display: inline-block;

    ul {
      border: 1px solid black;
      padding: 12px;
      margin-top: 2px;
    }
  }
`;

export default StyledRecipe;
