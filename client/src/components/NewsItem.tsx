import styled from "styled-components";

const NewsItem = styled.article`
  padding: 10px;
  display: flex;
  flex-direction: ${({ theme }) => theme.flexDirection};
  justify-content: space-between;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.listItemBackground};
  margin: 25px;
  text-align: center;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-family: "futura";
  align-items: center;
  border: #4f5359e6 solid 0.5px;
`;

export default NewsItem;
