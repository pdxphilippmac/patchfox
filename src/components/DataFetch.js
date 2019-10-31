import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Seachbar from "../components/Search";
// import Plus from "../icons/footerPlus";
import Loading from "./LoadingIndicator";
import AddArrow from "../icons/addArrow";

// import Plus from "../icons/footerPlus";

const AddButton = styled.button``;

const SearchItem = styled.article`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
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

export default function DataFetch({ handleInputChange, fillColor }) {
  const [search, setSearch] = useState("anno");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

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
        data: `fields *; search "${search}"; limit 50;\n\n`
      })
        .then(response => {
          console.log(response.data);
          setTimeout(() => {
            setPosts(response.data);
            setLoading(false);
          }, 5000);
        })
        .catch(err => {
          console.error(err);
        });
    }, 100);

    return () => {
      clearTimeout(timeoutHandler);
    };
  }, [search]);

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

      {loading && <Loading />}
      {!loading && (
        <div>
          {posts.map(post => (
            <div key={post.id}>
              <Fade right>
                <SearchItem>
                  <AddButton
                    name={post.name}
                    id={post.id}
                    onClick={() => handleClick(post.name, post.id)}
                  >
                    <AddArrow />
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
