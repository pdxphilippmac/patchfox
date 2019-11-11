import axios from "axios";
export default function addToJsonDb(name, id, cover) {
  axios
    .post("/posts", {
      title: name,
      id: id,
      cover: cover ? cover : false
    })
    .then(resp => {
      console.log(resp.data);
    })
    .catch(error => {
      console.log(error);
    });
}
