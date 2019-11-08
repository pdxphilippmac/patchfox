import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Seachbar from "../components/Search";
// import Plus from "../icons/footerPlus";
import SearchLoading from "../components/SearchLoadingIndicator";
import AddArrow from "../icons/addArrow";
import addToJsonDbfromSearch from "../api/addToDbJsonFromSearch";

// import Plus from "../icons/footerPlus";

const AddButton = styled.button``;

const SearchItem = styled.article`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: #262122e6;
  margin: 25px;
  color: white;

  border-radius: 0px 0px 0px 30px;
  font-family: "futura";
  align-items: center;
  border: #4f5359e6 solid 0.5px;
  color: lightslategray;
  padding: 25px;
`;

const FixedSearch = styled(Seachbar)`
  position: fixed;
`;

// const CoverImage = styled.img`
//   height: 150px;

// `;
const BackgroundDiv = styled.article`
  background: #1e2222;
  margin-bottom: 80px;
`;

export default function DataFetch({ handleInputChange }) {
  const [search, setSearch] = useState("Elder scrolls online");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const alternativeCover =
    "//alfalfastudio.com/wp-content/uploads/2018/07/featured.jpg";
  const alternativeRating = 0.0;

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
        data: `fields alternative_name,character,game.cover.url,collection,company,description,game,name,person,platform,popularity,published_at,test_dummy,theme;



        ; search "${search}"; limit 10;\n\n



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

  function handleClick(name, id, cover) {
    addToJsonDbfromSearch(name, id, cover);
    console.log(name);
  }

  function handleSearch(value) {
    setSearch(value);

    console.log(value, search);
  }
  // const options = {
  //   header: { "user-key": "e2715f17601c1d968b592f747c6aa839" }
  // };

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
                  <AddButton
                    name={post.name}
                    id={post.id}
                    onClick={() =>
                      handleClick(
                        post.name,
                        post.id,
                        post.game && true ? post.game.cover : alternativeCover
                      )
                    }
                  >
                    <AddArrow />
                  </AddButton>
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
