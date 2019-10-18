import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const SearchItem = styled.article`
  display: flex;
  flex-direction: column;
  background-color: #3b3434e6;
  margin: 5px;
  color: white;
  padding: 10px;
  border-radius: 4px;
  font-family: "futura";

  border: #707070e6 solid 0.5px;
`;

export default function DataFetch() {
  const [posts, setPosts] = useState([]);
  // const options = {
  //   header: { "user-key": "e2715f17601c1d968b592f747c6aa839" }
  // };

  useEffect(() => {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const targetUrl =
      "https://api-v3.igdb.com/games/1026?fields=id,name,url,summary,storyline,websites";
    axios
      .get(proxyUrl + targetUrl, {
        headers: {
          "user-key": "e2715f17601c1d968b592f747c6aa839",
          Accept: "application/json"
        },
        data: "fields category,description,position,title,values;"
      })
      .then(res => {
        console.log(res);
        setPosts(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {posts.map(post => (
        <SearchItem key={post.id}>
          <p>{post.name}</p>
          <p>{post.storyline}</p>
          <p>{post.summary} </p>
        </SearchItem>
      ))}
    </div>
  );
}
