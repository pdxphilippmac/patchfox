export default async function getGames() {
  const games = await fetch("/api/games").then(response => response.json());
  return arrayToObject(games);
}
function arrayToObject(array) {
  const allergyObject = {};
  for (let i = 0; i < array.length; i++) {
    allergyObject[array[i].name] = array[i];
  }
  return allergyObject;
}
