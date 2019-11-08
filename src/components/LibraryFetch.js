import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { useHistory } from "react-router-dom";

import Searchbar from "../components/Search";

import axios from "axios";
import Fade from "react-reveal/Fade";
import GlobalStyles from "../GlobalStyles";
import { Link } from "@reach/router";

const StyledPageDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  overflow: auto;
  background: #1e2222;
  overflow: scroll;
  margin-bottom: 80px;
`;
const Cover = styled.img`
  width: 264px;
  height: 374px;
  border-radius: 0px 0px 0px 30px;
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
  text-align: center;

  border-radius: 0px 0px 0px 30px;
  font-family: "futura";
  align-items: center;
  border: #4f5359e6 solid 0.5px;
  color: lightslategray;
  padding: 25px;
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
              <button onClick={() => handleNav(game.id)}>
                <h1>Get more info</h1>
              </button>
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
