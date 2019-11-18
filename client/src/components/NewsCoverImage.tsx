import styled from "styled-components";

const NewsCoverImage = styled.img`
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 6px;

  &:hover {
    transform: scale(1.5);
  }
`;

export default NewsCoverImage;
