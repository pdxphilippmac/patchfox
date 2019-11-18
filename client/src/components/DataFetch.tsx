import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Seachbar from "../components/Search";
import SearchLoading from "../components/SearchLoadingIndicator";
import AddArrow from "../icons/addArrow";
import addToJsonDbfromSearch from "../api/addToDbJsonFromSearch";
import SearchItem from "../components/SearchItem";

const FixedSearch = styled(Seachbar)`
  position: fixed;
`;

const BackgroundDiv = styled.article`
  background-color: ${({ theme }) => theme.body};
  margin-bottom: 80px;
`;

export default function DataFetch({ handleInputChange }) {
  const [search, setSearch] = useState("Elder scrolls online");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const alternativeCover =
    "//alfalfastudio.com/wp-content/uploads/2018/07/featured.jpg";

  useEffect(() => {
    const timeoutHandler = setTimeout(() => {
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      const targetUrl = "https://api-v3.igdb.com/search";

      axios({
        url: proxyUrl + targetUrl,
        method: "POST",
        headers: {
          Accept: "application/json",
          "user-key": "e2715f17601c1d968b592f747c6aa839"
        },
        data: `fields alternative_name,character
        ,collection,company,description,name,game.cover.url,person,platform,popularity,published_at,test_dummy,theme;search "${search}"; limit 10;\n\n



        `
      })
        .then(response => {
          console.log(response.data);
          setTimeout(() => {
            setPosts(response.data);
            setLoading(false);
          }, 1000);
        })
        .catch(err => {
          console.error(err);
        });
    }, 1000);

    return () => {
      clearTimeout(timeoutHandler);
    };
  }, [search]);

  function handleClick(name, game, cover) {
    addToJsonDbfromSearch(name, game, cover);
    // alert(`Saved ${name} to Library`);
    console.log(name);
  }

  function handleSearch(value) {
    setSearch(value);

    console.log(value, search);
  }

  return (
    <>
      <FixedSearch
        autoFocus
        handleInputChange={setSearch}
        onSearch={handleSearch}
        onChange={event => handleInputChange(event.target.value)}
      />

      {loading && <SearchLoading />}
      {!loading && (
        <BackgroundDiv>
          {posts.map(post => (
            <div key={post.id}>
              <Fade right>
                <SearchItem>
                  <button
                    name={post.name}
                    id={post.id}
                    onClick={() =>
                      handleClick(
                        post.name,
                        post.game ? post.game.id : post.id,
                        post.game && true ? post.game.cover : alternativeCover
                      )
                    }
                  >
                    <AddArrow />
                  </button>
                  <p>{post.name}</p>

                  {post.popularity ? (
                    <p>Rating: {post.popularity.toFixed(2)}</p>
                  ) : null}

                  {/* <p>{post.published_at}</p> */}
                  {/* 
                  <p>{post.id}</p> */}
                </SearchItem>
              </Fade>
            </div>
          ))}
        </BackgroundDiv>
      )}
    </>
  );
}
