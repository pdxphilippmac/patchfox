import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Seachbar from "../components/Search";
import Plus from "../icons/footerPlus";
import Loading from "./LoadingIndicator";

// import Plus from "../icons/footerPlus";

const AddButton = styled.button``;

const SearchItem = styled.article`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background-color: #1d1f2ee6;
  margin: 15px;
  color: white;
  padding: 10px;
  border-radius: 0px 0px 0px 30px;
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

  function handleClick(name) {
    addToJsonDb(name);
    console.log(name);
  }

  function addToJsonDb(name, id) {
    axios
      .post("http://localhost:3000/posts", {
        title: name,
        id: id,

        changes: "-Lich can now Nova without manacost and DK can melt your face"
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
  const [loading, setLoading] = React.useState(true);
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
      data: `fields *; search "${search}"; limit 50;\n\n`
    })
      .then(response => {
        console.log(response.data);
        setTimeout(setPosts(response.data), 50000);

        setLoading(false);
      })
      .catch(err => {
        console.error(err);
      });
  }, [search]);
  return (
    <>
      <FixedSearch
        autoFocus
        handleInputChange={setSearch}
        onSearch={handleSearch}
        onChange={event => handleInputChange(event.target.value)}
      />

      {loading && <Loading />}
      {!loading && (
        <div>
          {posts.map(post => (
            <div key={post.id}>
              <Fade left>
                <SearchItem>
                  <AddButton
                    name={post.name}
                    id={post.id}
                    onClick={() => handleClick(post.name, post.id)}
                  >
                    <Plus />
                  </AddButton>
                  <p>{post.name}</p>
                </SearchItem>
              </Fade>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
// onADd
