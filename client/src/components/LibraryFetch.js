import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "@reach/router";
import styled from "styled-components";
import Searchbar from "../components/Search";
import axios from "axios";
import Fade from "react-reveal/Fade";
import SearchItem from "../components/SearchItem";
import LibraryCover from "./LibraryCover";
import LibraryCard from "./LibraryCard";

const FixedSearch = styled(Searchbar)`
  position: fixed;
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
      <FixedSearch autoFocus onSearch={setSearch} />
      <LibraryCard>
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
                    <LibraryCover
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
      </LibraryCard>
    </>
  );
}
