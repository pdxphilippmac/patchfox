import axios from "axios";
export default function addToJsonDb(name, id, cover) {
  axios
    .post("http://localhost:3000/posts", {
      title: name,
      id: id,
      cover: cover
    })
    .then(resp => {
      console.log(resp.data);
    })
    .catch(error => {
      console.log(error);
    });
}
