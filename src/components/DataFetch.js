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

const CoverImage = styled.img`
  height: 200px;
  width: 200px;
`;

export default function DataFetch() {
  const [posts, setPosts] = useState([]);
  // const options = {
  //   header: { "user-key": "e2715f17601c1d968b592f747c6aa839" }
  // };

  useEffect(() => {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const targetUrl = "https://api-v3.igdb.com/covers";
    axios({
      url: proxyUrl + targetUrl,
      method: "POST",
      headers: {
        Accept: "application/json",
        "user-key": "e2715f17601c1d968b592f747c6aa839"
      },
      data: "fields alpha_channel,animated,game,height,image_id,url,width;"
    })
      .then(response => {
        console.log(response.data);
        setPosts(response.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);
  return (
    <div>
      {posts.map(post => (
        <SearchItem key={post.id}>
          <p>{post.id}</p>
          <p>{post.url}</p>
          <p>{post.description}</p>
          <p>{post.values} </p>
          <CoverImage alt="fotoHere" src={post.url}></CoverImage>
        </SearchItem>
      ))}
    </div>
  );
}
