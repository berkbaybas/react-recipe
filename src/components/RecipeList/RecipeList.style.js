import styled from "styled-components";

const StyledRecipeList = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  .recipe {
    padding-top: 16px;
    padding-bottom: 16px;

    &-title {
      font-size: 22px;
      margin-bottom: 16px;
    }

    &-time {
      font-weight: 900;
    }

    &-method {
      margin-top: 4px;
    }

    &-ingredients {
      color: #cecece;
      font-size: 14px;
      margin-top: 4px;
    }

    a {
      color: blue;
      margin-top: 8px;
      margin-bottom: 8px;
      display: inline-block;

      &:hover {
        color: black;
      }
    }
  }
`;

export default StyledRecipeList;
