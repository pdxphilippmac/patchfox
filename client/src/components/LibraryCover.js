import styled from "styled-components";

const LibraryCover = styled.img`
  width: ${({ theme }) => theme.imageWidth};
  height: ${({ theme }) => theme.imageWidth};
  border-radius: ${({ theme }) => theme.borderRadius};
  &:hover {
    transform: scale(1.2);
    border: #79d7ed 2px solid;
  }
`;

export default LibraryCover;
