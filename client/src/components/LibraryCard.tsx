import styled from "styled-components";

const LibraryCard = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  overflow: auto;
  background-color: ${({ theme }) => theme.body};
  overflow: scroll;
  margin-bottom: 80px;
`;

export default LibraryCard;
