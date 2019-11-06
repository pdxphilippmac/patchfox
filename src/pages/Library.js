import React, { useState, useEffect } from "react";

// import GlobalStyles from "../GlobalStyles";
import styled from "styled-components";

import Searchbar from "../components/Search";
import { searchItem } from "../utils/animations";
// import HomeIcon from "../icons/footerHome";
import axios from "axios";
import Fade from "react-reveal/Fade";
// import JsonFetch from "../server";

const StyledPageDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  overflow: auto;
  background: #1e2222;
  overflow: scroll;
`;

const FixedSearch = styled(Searchbar)`
  position: fixed;
`;

const SearchItem = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: #262122e6;
  margin: 25px;
  color: white;

  border-radius: 0px 0px 0px 30px;
  font-family: "futura";
  align-items: center;
  border: #4f5359e6 solid 0.5px;
  color: lightslategray;
  padding: 25px;
  animation: ${searchItem} 3s ease-out 1 both;
`;
const Ascii = styled.p`
  font-size: 30px;
`;

export default function Add() {
  const [search, setSearch] = useState("/");
  const [library, setLibrary] = useState([]);

  const filterLibrary = library.filter(game =>
    game.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    axios.get("http://localhost:3000/posts").then(res => {
      setLibrary(res.data);
      console.log(`this is ${library}`);
    });
  }, [search]);

  return (
    <>
      {/* <GlobalStyles /> */}

      <FixedSearch autoFocus onSearch={setSearch} />

      <StyledPageDiv>
        {filterLibrary.map(game => (
          <Fade bottom key={game.name} game={game}>
            <SearchItem>
              <p>
                {game.cover ? (
                  <img alt="lol nothing to display" src={game.cover.url} />
                ) : (
                  <Ascii>ಥ_ಥ</Ascii>
                )}
              </p>
              <p>{game.title}</p>
              <p>{game.id}</p>

              {/* 
              {game.cover.url && <img alt="LoL" src={game.cover.url} />} */}
              {/* <img alt="CoverImage" src={game.cover.id} /> */}
            </SearchItem>
            {/* <HomeIcon /> */}
          </Fade>
        ))}
      </StyledPageDiv>
    </>
  );
}
