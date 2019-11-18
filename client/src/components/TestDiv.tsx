import styled from "styled-components";

const TestDiv = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.listItemBackground};
  flex-grow: 1;
  align-items: center;
  margin: 20px;
  padding: 20px;
  border: black solid 1px;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: black 0px 6px 6px 6px;
  color: lightslategray;
  margin-bottom: 100px;
`;

export default TestDiv;
