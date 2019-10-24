import React, { useState, useEffect } from "react";
import styled from "styled-components";

const axios = require("axios");

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

export default function JsonFetch() {
  const [posts, setPosts] = useState([]);
  // const options = {
  //   header: { "user-key": "e2715f17601c1d968b592f747c6aa839" }
  // };

  useEffect(() => {
    const targetUrl = "http://localhost:3000/posts";
    axios({
      url: targetUrl,
      method: "GET"
    })
      .then(response => {
        console.log(response.data);

        setPosts(response.data);
        console.log(posts);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <div>
        {posts.map(post => (
          <SearchItem>
            {/* <CoverImage alt="fotoHere" src={post.url}></CoverImage> */}
            <p>{post.title}</p>
            <p>{post.changes}</p>
          </SearchItem>
        ))}
      </div>
    </>
  );
}
