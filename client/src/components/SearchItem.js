import styled from "styled-components";

const SearchItem = styled.article`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: ${({ theme }) => theme.listItemBackground};
  margin: 25px;
  color: ${({ theme }) => theme.text};

  border-radius: ${({ theme }) => theme.borderRadius};
  font-family: "futura";
  align-items: center;
  border: #4f5359e6 solid 0.5px;
  color: lightslategray;
  padding: 25px;
`;

export default SearchItem;
