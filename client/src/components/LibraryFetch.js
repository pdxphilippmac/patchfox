import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Searchbar from "../components/Search";
import axios from "axios";
import Fade from "react-reveal/Fade";
import GlobalStyles from "../GlobalStyles";
import { Link } from "@reach/router";

//IMPORT games from mongodb?
import getGames from "../api/getGames";

const StyledPageDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  overflow: auto;
  background-color: ${({ theme }) => theme.body};
  overflow: scroll;
  margin-bottom: 80px;
`;
const Cover = styled.img`
  width: ${({ theme }) => theme.imageWidth};
  height: ${({ theme }) => theme.imageWidth};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

const FixedSearch = styled(Searchbar)`
  position: fixed;
`;

const SearchItem = styled.article`
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

  padding: 25px;
`;
const Ascii = styled.p`
  font-size: 30px;
`;
const StyledButton = styled.button`
  /* :hover {
    transform: scale(5.5);
    border: red solid 10px;
    border-radius: 0 0 0 20px;
  } */
`;

export default function LibraryFetch() {
  const history = useHistory();
  function handleNav(value) {
    history.push(`/library/${value}`);
  }

  const [search, setSearch] = useState("");
  const [library, setLibrary] = useState([]);

  const filterLibrary = library.filter(game =>
    game.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    axios.get("/posts").then(res => {
      setLibrary(res.data);
      console.log(`this is ${library}`);
    });
  }, [search]);

  /*useEffect(() => {
    getGames().then(games => {
      setLibrary(games);
    });
  }, [search]);*/

  return (
    <>
      <GlobalStyles />

      <FixedSearch autoFocus onSearch={setSearch} />

      <StyledPageDiv>
        {filterLibrary.map(game => (
          <Fade bottom key={game.name} game={game}>
            <SearchItem>
              <h1>{game.title}</h1>
              {/* <h2>{game.id ? game.id : game.game.id}</h2> */}

              <p>
                {game.cover ? (
                  <Link
                    onClick={() => handleNav(game.game.id)}
                    to={`/library/${game.id}`}
                  >
                    <Cover
                      alt="ಥ_ಥ"
                      src={
                        game.cover.url
                          ? game.cover.url.replace("t_thumb", "t_cover_big")
                          : "//" + `${game.cover}`
                      }
                    />
                  </Link>
                ) : (
                  <Ascii>ಥ_ಥ</Ascii>
                )}
              </p>

              {/* <p>{game.id}</p>
              <p>{game.changes}</p> */}
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
