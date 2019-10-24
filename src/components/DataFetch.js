import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Seachbar from "../components/Search";

const TestButton = styled.button`
  background: red;
`;

const SearchItem = styled.article`
  display: flex;
  flex-direction: column;
  background-color: #3b3434e6;
  margin: 15px;
  color: white;
  padding: 10px;
  border-radius: 4px;
  font-family: "futura";
  align-items: center;
  border: #707070e6 solid 0.5px;
`;

const FixedSearch = styled(Seachbar)`
  position: fixed;
`;

// const CoverImage = styled.img`
//   height: 150px;

// `;

export default function DataFetch({ handleInputChange }) {
  const [search, setSearch] = useState("anno");

  function addToJsonDb() {
    axios
      .post("http://localhost:3000/posts", {
        title: "Hello"

        // changes: "-Lich can now Nova without manacost and DK can melt your face"
      })
      .then(resp => {
        console.log(resp.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  function handleSearch(value) {
    setSearch(value);

    console.log(value);
    console.log(search);
  }
  const [posts, setPosts] = useState([]);
  // const options = {
  //   header: { "user-key": "e2715f17601c1d968b592f747c6aa839" }
  // };

  useEffect(() => {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const targetUrl = "https://api-v3.igdb.com/search";
    axios({
      url: proxyUrl + targetUrl,
      method: "POST",
      headers: {
        Accept: "application/json",
        "user-key": "e2715f17601c1d968b592f747c6aa839"
      },
      data: `fields *; search "${search}"; limit 15;\n\n`
    })
      .then(response => {
        console.log(response.data);
        setPosts(response.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, [search]);
  return (
    <>
      <FixedSearch
        // onClick={addToJsonDb}
        handleInputChange={setSearch}
        onSearch={handleSearch}
        onChange={event => handleInputChange(event.target.value)}
      />
      <TestButton onClick={addToJsonDb}>O</TestButton>
      <div>
        {posts.map(post => (
          <div key={post.id}>
            <Fade left>
              <SearchItem onClick={addToJsonDb}>
                {/* <CoverImage alt="fotoHere" src={post.url}></CoverImage> */}
                <p>{post.name}</p>
              </SearchItem>
            </Fade>
          </div>
        ))}
      </div>
    </>
  );
}
// onADd
