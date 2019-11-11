// import React, { useState } from "react";
// import axios from "axios";

// export default function getGamefromAPi() {
//   const [search, setSearch] = useState("anno");
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timeoutHandler = setTimeout(() => {
//       const proxyUrl = "https://cors-anywhere.herokuapp.com/";
//       const targetUrl = "https://api-v3.igdb.com/search";

//       axios({
//         url: proxyUrl + targetUrl,
//         method: "POST",
//         headers: {
//           Accept: "application/json",
//           "user-key": "e2715f17601c1d968b592f747c6aa839"
//         },
//         data: `fields *; search "${search}"; limit 50;\n\n`
//       })
//         .then(response => {
//           console.log(response.data);
//           setTimeout(() => {
//             setPosts(response.data);
//             setLoading(false);
//           }, 1000);
//         })
//         .catch(err => {
//           console.error(err);
//         });
//     }, 1000);

//     return () => {
//       clearTimeout(timeoutHandler);
//     };
//   }, [search]);
// }
