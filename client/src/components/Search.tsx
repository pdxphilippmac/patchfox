import React , {FC, ChangeEvent} from "react";
import styled from "styled-components";

const SearchInput = styled.input`
  font-family: futura;
  font-size: 17px;
  color: white;
  background: #2e2e2ee6;
  padding: 8px;
  margin: 8px;
  border-radius: 10px;
  text-align: center;
  min-width: 95vw;
  box-shadow: 0 4px 4px -2px #00ceff;
  border: 2px solid #00ceff;
`;



interface SeachbarProps {
  onSearch: (value: string) => void
}

export const Seachbar: FC<SeachbarProps> = ({ onSearch  }) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value:string = event.target.value;
    onSearch(value);
  }

  return (
    <SearchInput
      type="search"
      placeholder="Search your Games"
      onChange={handleInputChange}
    />
  );
}

export default Seachbar