import React, { useState, useEffect } from "react";
import axios from "axios";

export default function DataFetch() {
  const [posts, setPosts] = useState([]);
  // const options = {
  //   header: { "user-key": "e2715f17601c1d968b592f747c6aa839" }
  // };

  useEffect(() => {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const targetUrl = "https://api-v3.igdb.com/characters/";
    axios
      .get(proxyUrl + targetUrl, {
        headers: {
          "user-key": "e2715f17601c1d968b592f747c6aa839",
          Accept: "application/json"
        },
        data: "fields akas,country_name,created_at,description,games;"
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
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.id}</li>
        ))}
      </ul>
    </div>
  );
}
