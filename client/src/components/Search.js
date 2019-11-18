import React from "react";
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

export default function Seachbar({ onSearch }) {


    function handleInputChange(event) {
    const value = event.target.value;
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
