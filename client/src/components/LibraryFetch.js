import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "@reach/router";
import styled from "styled-components";
import Searchbar from "../components/Search";
import axios from "axios";
import Fade from "react-reveal/Fade";

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
  &:hover {
    transform: scale(1.2);
    border: #79d7ed 2px solid;
  }
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
  margin: 20px;
  text-align: center;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-family: "futura";
  align-items: center;
  border: #4f5359e6 solid 0.5px;
  padding: 20px;
`;
const Ascii = styled.p`
  font-size: 30px;
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

  // useEffect(() => {
  //   getGames().then(fetchedGames => {
  //     setLibrary(fetchedGames);
  //   });
  // }, []);

  return (
    <>
      <FixedSearch autoFocus onSearch={setSearch} />
      <StyledPageDiv>
        {filterLibrary.map(game => (
          <Fade left key={game.name} game={game}>
            <SearchItem>
              <h1>{game.title}</h1>

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
            </SearchItem>
          </Fade>
        ))}
      </StyledPageDiv>
    </>
  );
}
