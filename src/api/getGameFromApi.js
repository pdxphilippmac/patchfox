import axios from "axios";

export default function getGamefromAPi() {
  // const [params, setParams] = useState([]);

  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const targetUrl = `https://api-v3.igdb.com/games/103204/?fields=name,involved_companies.company.name,cover.url,summary,game_modes.name,version_title,platforms.name,first_release_date,release_dates.human,websites,total_rating&expand=involved_companies,cover,platforms,platform.versions,version_parent,version_title`;
  axios({
    url: proxyUrl + targetUrl,
    method: "GET",
    headers: {
      Accept: "application/json",
      "user-key": "e2715f17601c1d968b592f747c6aa839",
      "Access-Control-Allow-Origin": "*"
    }
  })
    .then(response => {
      console.log(
        `This is responseData from getGameFromAPi-function ${response.data}`
      );
      let game = response.data;

      console.log(`This is game from getGameFromApi-function ${game}`);

      return game;
    })
    .catch(err => {
      console.error(err);
    });
}
