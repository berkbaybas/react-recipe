import styled from "styled-components";

const StyledCreate = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  h2 {
    text-align: center;
    font-size: 22px;
    margin-top: 16px;
    margin-bottom: 16px;
  }
  form {
    display: flex;
    flex-direction: column;
    padding-left: 128px;
    padding-right: 128px;

    label {
      margin-top: 32px;
      margin-bottom: 32px;
      width: 100%;

      span {
        width: 250px;
        display: inline-block;
      }

      input,
      textarea {
        width: 100%;
      }
    }

    button {
      padding: 8px;
      margin-top: 16px;
    }
  }
`;

export default StyledCreate;
