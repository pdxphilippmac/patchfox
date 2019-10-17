import React, { useState } from "react";
import GlobalStyles from "../GlobalStyles";
import styled from "styled-components";
import { games } from "../api/gamingAPI";
import Seachbar from "../components/Search";
import { searchItem } from "../utils/animations";

const StyledPageDiv = styled.div`
  height: 100vh;
  background: #1d1f2ee6;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
`;
const FilteredGame = styled.div``;

const SearchItem = styled.article`
  display: flex;
  justify-content: space-between;
  background-color: #3b3434e6;
  margin: 5px;
  color: white;
  padding: 10px;
  border-radius: 4px;
  font-family: "futura";

  border: #707070e6 solid 0.5px;
  animation: ${searchItem} 3s ease-out 1 both;
`;

export default function Add({ handleInputChange }) {
  const [search, setSearch] = useState("-");

  const filteredGames = games.filter(searchitem =>
    searchitem.title.toLowerCase().includes(search.toLowerCase())
  );

  function handleSearch(value) {
    setSearch(value);
  }

  return (
    <>
      <GlobalStyles />

      <StyledPageDiv>
        <Seachbar
          handleInputChange={setSearch}
          onSearch={handleSearch}
          onChange={event => handleInputChange(event.target.value)}
        />

        {filteredGames.map(game => (
          <FilteredGame key={game.title} game={game}>
            <>
              <SearchItem>{game.title}</SearchItem>
            </>
          </FilteredGame>
        ))}
      </StyledPageDiv>
    </>
  );
}
